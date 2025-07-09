import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

import styles from './catalog-title.module.scss';

const propertyGenitiveMap: Record<string, string> = {
  'Виллы': 'вилл',
  'Апартаменты': 'апартаментов',
  'Пентхаусы': 'пентхаусов',
  'Квартиры': 'квартир',
  'Новостройки': 'новостроек',
  'Таунхаусы': 'таунхаусов',
};

const getTitleFromFilters = (dealType?: string, propertyType?: string): string => {
  // 1. Приоритет: если есть dealType и НЕТ propertyType — показываем просто "Продажа" или "Аренда"
  if ((dealType === 'Купить' || dealType === 'Арендовать') && (!propertyType || propertyType === 'Любая недвижимость')) {
    return dealType === 'Купить' ? 'Продажа' : 'Аренда';
  }

  // 2. Если есть dealType и есть propertyType — "Продажа вилл" / "Аренда новостроек"
  if ((dealType === 'Купить' || dealType === 'Арендовать') && propertyType && propertyType !== 'Любая недвижимость') {
    const genitive = propertyGenitiveMap[propertyType] || propertyType.toLowerCase();
    const base = dealType === 'Купить' ? 'Продажа' : 'Аренда';
    return `${base} ${genitive}`;
  }

  // 3. Если есть только propertyType — показываем его как есть
  if (propertyType && propertyType !== 'Любая недвижимость') {
    return propertyType;
  }
  return '';
};

const CatalogTitle: React.FC = () => {
  const { dealType, propertyType } = useSelector((state: RootState) => state.filters);

  const title = getTitleFromFilters(dealType, propertyType);

  return <h1 className={styles.root}>{title}</h1>;
};

export default CatalogTitle;
