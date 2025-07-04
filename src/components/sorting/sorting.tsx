import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { setFilters } from '@features/filters/filtersSlice';

import styles from './sorting.module.scss';

import ArrowDown from '@assets/arrow-down.svg';

const sortingType = ['По росту стоимости', 'По убыванию стоимости', 'По росту площади', 'По убыванию площади']

const Sorting = () => {
  const dispatch = useDispatch();
  const [clickedMenu, setClickedMenu] = useState<'sorting' | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<'sorting' | null>(null);
  const openMenu = clickedMenu ?? hoveredMenu;
  const filters = useSelector((state: RootState) => state.filters);

  const handleClick = (menu: 'sorting') => {
    setClickedMenu((prev) => (prev === menu ? null : menu));
    setHoveredMenu(null);
  };

  const handleChange = (field: keyof typeof filters, value: string) => {
    dispatch(setFilters({ [field]: value }));
  };

  return (
    <div className={styles.root}>
      <button type="button" onClick={() => handleClick('sorting')} className={styles.selectButton}>
        <span>{filters.sortingType || 'По росту стоимости'}</span>
        <ArrowDown className={`${styles.arrow} ${openMenu === 'sorting' ? styles.arrowRotated : ''}`} />
      </button>
      <ul className={`${styles.selectList} ${openMenu === 'sorting' ? styles.selectListVisible : ''}`}>
        {sortingType.map((type) => (
          <li
            className={styles.selectItem}
            key={type}
            onClick={() => {
              handleChange('sortingType', type);
              setClickedMenu(null);
              setHoveredMenu(null);
            }}
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sorting;
