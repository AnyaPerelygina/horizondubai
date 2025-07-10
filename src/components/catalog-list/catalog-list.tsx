import { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

import CatalogCard from "@components/catalog-card/catalog-card";
import Sorting from "@components/sorting/sorting";
import Pagination from "@components/pagination/pagination";

import styles from './catalog-list.module.scss';
import { CatalogListProps } from './catalog-list.types';
import { CatalogCardProps } from '@components/catalog-card/catalog-card.types';

const CatalogList = ({ properties }: CatalogListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeTab, setActiveTab] = useState('all');

  const filters = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxItems = windowWidth < 768 ? 10 : 12;

  const tabs = [
    { label: 'Все', value: 'all' },
    { label: '1 комнатные', value: 'beds:1' },
    { label: '2 комнатные', value: 'beds:2' },
    { label: '3 комнатные', value: 'beds:3' },
    { label: 'У моря', value: 'nearSea:true' },
    { label: 'Dubai Marina', value: 'nameDistrict:Dubai Marina' },
    { label: 'Dubai Volodya', value: 'nameDistrict:Dubai Volodya' }
  ];

  const parseNumber = (value: string) =>
    Number(value.replace(/\s/g, '').replace(',', '.'));

  const filteredAndSortedProperties = useMemo(() => {
    let result = [...properties];

    // Фильтрация по табу
    if (activeTab !== 'all') {
      const [rawKey, rawValue] = activeTab.split(':');
      const key = rawKey as keyof CatalogCardProps;
      result = result.filter((item) => String(item[key]) === rawValue);
    }

    // Сортировка
    switch (filters.sortingType) {
      case 'По росту стоимости':
        result.sort((a, b) => parseNumber(a.price) - parseNumber(b.price));
        break;
      case 'По убыванию стоимости':
        result.sort((a, b) => parseNumber(b.price) - parseNumber(a.price));
        break;
      case 'По росту площади':
        result.sort((a, b) => parseNumber(b.square) - parseNumber(a.square));
        break;
      case 'По убыванию площади':
        result.sort((a, b) => parseNumber(a.square) - parseNumber(b.square));
        break;
      default:
        break;
    }

    return result;
  }, [properties, filters.sortingType, activeTab]);

  const totalPages = Math.ceil(filteredAndSortedProperties.length / maxItems);
  const startIndex = (currentPage - 1) * maxItems;
  const paginatedProperties = filteredAndSortedProperties.slice(startIndex, startIndex + maxItems);

  // Счетчик в табах
  const getCountForTab = (tabValue: string): number => {
    if (tabValue === 'all') {
      return properties.length;
    }
    const [rawKey, rawValue] = tabValue.split(':');
    const key = rawKey as keyof CatalogCardProps;
    return properties.filter(item => String(item[key]) === rawValue).length;
  };

  return (
    <div className={styles.root}>
      <Sorting />

      <div className={styles.tabs}>
        {tabs.map(({ label, value }) => (
          <button
            key={value}
            className={`${styles.tabButton} ${activeTab === value ? styles.activeTab : ''}`}
            onClick={() => {
              setActiveTab(value);
              setCurrentPage(1);
            }}
          >
            <span>{label}</span>
            <span className={styles.count}>{getCountForTab(value)}</span>
          </button>
        ))}
      </div>

      {filteredAndSortedProperties.length === 0 ? (
        <div className={styles.empty}>Ничего не найдено</div>
      ) : (
        <>
          <ul className={styles.list}>
            {paginatedProperties.map(({
              imgWebp, price, type, beds, square,
              nameDeveloper, nameComplex, nameDistrict, link
            }, index) => (
              <li className={styles.item} key={index}>
                <CatalogCard
                  imgWebp={imgWebp}
                  price={price}
                  type={type}
                  beds={beds}
                  square={square}
                  nameDeveloper={nameDeveloper}
                  nameComplex={nameComplex}
                  nameDistrict={nameDistrict}
                  link={link}
                />
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default CatalogList;
