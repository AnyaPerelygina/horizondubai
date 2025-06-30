import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@app/store';
import { setFilters } from '@features/filters/filtersSlice';

import styles from './filter-form.module.scss';

import ArrowDown from '@assets/arrow-down.svg';
import Dollar from '@assets/dollar.svg';

const dealTypes = ['Купить', 'Арендовать'];
const propertyTypes = ['Любая недвижимость', 'Новостройки', 'Квартиры', 'Апартаменты', 'Виллы', 'Пентхаусы'];

const FilterForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filters = useSelector((state: RootState) => state.filters);
  const [clickedMenu, setClickedMenu] = useState<'deals' | 'properties' | 'range' | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<'deals' | 'properties' | 'range' | null>(null);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const openMenu = clickedMenu ?? hoveredMenu;

  // Обработчик клика вне контейнера — закрываем фиксированное меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setClickedMenu(null);
        setHoveredMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Клик по кнопке: фиксируем меню, если было открыто — закрываем
  const handleClick = (menu: 'deals' | 'properties' | 'range') => {
    setClickedMenu((prev) => (prev === menu ? null : menu));
    setHoveredMenu(null); // Убираем временное наведение
  };

  // Наведение мыши — открываем временно, если нет фиксированного меню
  const handleMouseEnter = (menu: 'deals' | 'properties' | 'range') => {
    if (!clickedMenu) {
      setHoveredMenu(menu);
    }
  };

  // Уход мыши из области меню — закрываем временное меню (если нет клика)
  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const handleChange = (field: keyof typeof filters, value: string) => {
    dispatch(setFilters({ [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFilters({ priceFrom, priceTo }));
    navigate('/catalog');
  };

  return (
    <div className={styles.root} ref={containerRef} onMouseLeave={handleMouseLeave}>
      <form onSubmit={handleSubmit}>

        <div
          className={`${styles.customSelect} ${styles.customSelectDeals}`}
          onMouseEnter={() => handleMouseEnter('deals')}
        >
          <button type="button" onClick={() => handleClick('deals')} className={styles.selectButton}>
            <span>{filters.dealType || 'Купить'}</span>
            <ArrowDown className={`${styles.arrow} ${openMenu === 'deals' ? styles.arrowRotated : ''}`} />
          </button>
          <ul className={`${styles.selectList} ${openMenu === 'deals' ? styles.selectListVisible : ''}`}>
            {dealTypes.map((type) => (
              <li
                className={styles.selectItem}
                key={type}
                onClick={() => {
                  handleChange('dealType', type);
                  setClickedMenu(null);
                  setHoveredMenu(null);
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${styles.customSelect} ${styles.customSelectProperty}`}
          onMouseEnter={() => handleMouseEnter('properties')}
        >
          <button type="button" onClick={() => handleClick('properties')} className={styles.selectButton}>
            <span>{filters.propertyType || 'Любая недвижимость'}</span>
            <ArrowDown className={`${styles.arrow} ${openMenu === 'properties' ? styles.arrowRotated : ''}`} />
          </button>
          <ul className={`${styles.selectList} ${openMenu === 'properties' ? styles.selectListVisible : ''}`}>
            {propertyTypes.map((type) => (
              <li
                className={styles.selectItem}
                key={type}
                onClick={() => {
                  handleChange('propertyType', type);
                  setClickedMenu(null);
                  setHoveredMenu(null);
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${styles.customSelect} ${styles.customSelectPrice}`}
          onMouseEnter={() => handleMouseEnter('range')}
        >
          <button type="button" onClick={() => handleClick('range')} className={styles.selectButton}>
            <span>Цены</span>
            <ArrowDown className={`${styles.arrow} ${openMenu === 'range' ? styles.arrowRotated : ''}`} />
          </button>

          <div className={`${styles.selectList} ${openMenu === 'range' ? styles.selectListVisible : ''}`}>
            <div className={styles.selectPrice}>
              <input
                type="number"
                placeholder="от"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
              />
              <Dollar />
            </div>
            <div className={styles.selectPrice}>
              <input
                type="number"
                placeholder="до"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
              />
              <Dollar />
            </div>
          </div>
        </div>

        <div className={styles.customInput}>
          <input
            type="text"
            value={filters.location}
            placeholder="Район, адрес, метро или ЖК"
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>

        <button type="submit" className={styles.buttonForm}>
          Начать подбор
        </button>
      </form>
    </div>
  );
};

export default FilterForm;

