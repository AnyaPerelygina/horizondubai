import CatalogCard from "@components/catalog-card/catalog-card";

import styles from './catalog-list.module.scss';
import { CatalogListProps } from './catalog-list.types';

const CatalogList = ({ apartments }: CatalogListProps) => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {apartments.map(({imgWebp, price, type, beds, square, nameDeveloper, nameComplex, nameDistrict, link }, index) => (
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
