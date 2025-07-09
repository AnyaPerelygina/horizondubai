import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Container from "@ui/container/container";
import CatalogTitle from "@components/catalog-title/catalog-title";
import Breadcrumbs from '@components/breadcrumbs/breadcrumbs';
import CatalogList from "@components/catalog-list/catalog-list";
import Pagination from "@components/pagination/pagination";

import styles from './catalog-block.module.scss';

import mockProperties from "@data/properties";
import { RootState } from "@app/store";

const typeMap: Record<string, string> = {
  'Любая недвижимость': '',
  'Новостройки': 'новостройки',
  'Квартиры': 'квартиры',
  'Апартаменты': 'апартаменты',
  'Виллы': 'виллы',
  'Пентхаусы': 'пентхаусы',
};

const CatalogBlock = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);
  const filters = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let maxItems = 12;
  if (windowWidth < 768) maxItems = 10;

  const filteredProperties = mockProperties.filter((item) => {
    const dealMatch = filters.dealType
      ? (filters.dealType === 'Купить' ? item.deal === 'sale' : item.deal === 'rent')
      : true;

    const propertyMatch = filters.propertyType && filters.propertyType !== 'Любая недвижимость'
      ? item.type === typeMap[filters.propertyType]
      : true;

    return dealMatch && propertyMatch;
  });

  const totalPages = Math.ceil(filteredProperties.length / maxItems);
  const startIndex = (currentPage - 1) * maxItems;
  const propertiesToShow = filteredProperties.slice(startIndex, startIndex + maxItems);

  const titleParts: string[] = [];

  if (filters.dealType === 'Купить') titleParts.push('Продажа');
  else if (filters.dealType === 'Арендовать') titleParts.push('Аренда');

  if (filters.propertyType && filters.propertyType !== 'Любая недвижимость') {
    titleParts.push(filters.propertyType);
  }

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Breadcrumbs totalCount={filteredProperties.length} filters={titleParts} />
        <CatalogTitle />
        <CatalogList properties={propertiesToShow} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Container>
    </section>
  );
};

export default CatalogBlock;
