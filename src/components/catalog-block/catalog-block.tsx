import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";

import Container from "@ui/container/container";
import CatalogTitle from "@components/catalog-title/catalog-title";
import Breadcrumbs from '@components/breadcrumbs/breadcrumbs';
import CatalogList from "@components/catalog-list/catalog-list";

import styles from './catalog-block.module.scss';

import mockProperties from "@data/properties";

const typeMap: Record<string, string> = {
  'Любая недвижимость': '',
  'Новостройки': 'новостройки',
  'Квартиры': 'квартиры',
  'Апартаменты': 'апартаменты',
  'Виллы': 'виллы',
  'Пентхаусы': 'пентхаусы',
};

const CatalogBlock = () => {
  const filters = useSelector((state: RootState) => state.filters);

  const filteredProperties = mockProperties.filter((item) => {
    const dealMatch = filters.dealType
      ? (filters.dealType === 'Купить' ? item.deal === 'sale' : item.deal === 'rent')
      : true;

    const propertyMatch = filters.propertyType && filters.propertyType !== 'Любая недвижимость'
      ? item.type === typeMap[filters.propertyType]
      : true;

    return dealMatch && propertyMatch;
  });

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
        <CatalogList properties={filteredProperties}  />
      </Container>
    </section>
  );
};

export default CatalogBlock;
