import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

import CatalogCard from "@components/catalog-card/catalog-card";
import Sorting from "@components/sorting/sorting";

import styles from './catalog-list.module.scss';
import { CatalogListProps } from './catalog-list.types';

const CatalogList = ({ properties }: CatalogListProps) => {
  const filters = useSelector((state: RootState) => state.filters);

  const sortedProperties = useMemo(() => {
  const sorted = [...properties];

  const parseNumber = (value: string) =>
    Number(value.replace(/\s/g, '').replace(',', '.'));

    switch (filters.sortingType) {
      case 'По росту стоимости':
        return sorted.sort((a, b) => parseNumber(a.price) - parseNumber(b.price));
      case 'По убыванию стоимости':
        return sorted.sort((a, b) => parseNumber(b.price) - parseNumber(a.price));
      case 'По росту площади':
        return sorted.sort((a, b) => parseNumber(a.square) - parseNumber(b.square));
      case 'По убыванию площади':
        return sorted.sort((a, b) => parseNumber(b.square) - parseNumber(a.square));
      default:
        return sorted;
    }
  }, [properties, filters.sortingType]);

  return (
    <div className={styles.root}>
      <Sorting />
      <ul className={styles.list}>
        {sortedProperties.map(({imgWebp, price, type, beds, square, nameDeveloper, nameComplex, nameDistrict, link }, index) => (
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
    </div>
  )
}

export default CatalogList;
