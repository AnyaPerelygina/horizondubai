import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@app/store';
import { setFilters } from '@features/filters/filtersSlice';

const dealTypes = ['Купить', 'Продать', 'Арендовать'];
const propertyTypes = ['Квартиры', 'Апартаменты', 'Виллы'];

import styles from './filter-form.module.scss';

const FilterForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filters = useSelector((state: RootState) => state.filters);

  const handleChange = (field: keyof typeof filters, value: string) => {
    dispatch(setFilters({ [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/catalog');
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <div className={styles.customInput}>
          <label>Вид сделки</label>
          <select value={filters.deal} onChange={(e) => handleChange('deal', e.target.value)}>
            <option value="">Выберите</option>
            {dealTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className={styles.customInput}>
          <label>Тип недвижимости</label>
          <select value={filters.type} onChange={(e) => handleChange('type', e.target.value)}>
            <option value="">Выберите</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>



        {/* <div className={styles.customInput}>
          <label>Цена от</label>
          <input
            type="number"
            value={filters.priceFrom}
            onChange={(e) => handleChange('priceFrom', e.target.value)}
          />
        </div>

        <div className={styles.customInput}>
          <label>Цена до</label>
          <input
            type="number"
            value={filters.priceTo}
            onChange={(e) => handleChange('priceTo', e.target.value)}
          />
        </div> */}

        <div className={styles.customInput}>
          <label>Название района</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>

        <button type="submit" className={styles.buttonForm}>Начать подбор</button>
      </form>
    </div>
  );
};

export default FilterForm;
