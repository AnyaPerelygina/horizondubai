import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@app/store';
import { setFilters } from '@features/filters/filtersSlice';

import styles from './filter-form.module.scss';

import ArrowDown from '@assets/arrow-down.svg';
import Dollar from '@assets/dollar.svg';
import mockProperties from '@data/properties';
import Link from '@ui/link/link';

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
  const [isMobile, setIsMobile] = useState(false);

  const countsByType = mockProperties.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalCount = mockProperties.length;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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

    // Собираем параметры в URL
    const params = new URLSearchParams();

    if (filters.dealType) params.set('dealType', filters.dealType);
    if (filters.propertyType) params.set('propertyType', filters.propertyType);
    if (priceFrom) params.set('priceFrom', priceFrom);
    if (priceTo) params.set('priceTo', priceTo);

    navigate(`/catalog?${params.toString()}`);
  };

  return (
    <div className={styles.root} ref={containerRef} onMouseLeave={handleMouseLeave}>
      {!isMobile ? (
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
      ) : (
        <div className={styles.linksWrapper}>
          <Link href={'/catalog?propertyType=Апартаменты'} className={styles.filterLink}>
            <span className={styles.linkText}>Апартаменты</span>
            <span className={styles.linkCount}>{countsByType['апартаменты'] || 0}</span>
          </Link>
          <Link href={'/catalog?propertyType=Пентхаусы'} className={styles.filterLink}>
            <span className={styles.linkText}>Пентхаусы</span>
            <span className={styles.linkCount}>{countsByType['пентхаусы'] || 0}</span>
          </Link>
          <Link href={'/catalog?propertyType=Виллы'} className={styles.filterLink}>
            <span className={styles.linkText}>Виллы</span>
            <span className={styles.linkCount}>{countsByType['виллы'] || 0}</span>
          </Link>
          <Link href={'/catalog?propertyType=Таунхаусы'} className={styles.filterLink}>
            <span className={styles.linkText}>Таунхаусы</span>
            <span className={styles.linkCount}>{countsByType['таунхаусы'] || 0}</span>
          </Link>
          <Link href={'/catalog'} className={styles.filterLink}>
            <span className={styles.linkText}>Все объекты в Дубае</span>
            <span className={styles.linkCount}>{totalCount}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FilterForm;

