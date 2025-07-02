import { useEffect, useState } from "react";

import CatalogCard from "@components/catalog-card/catalog-card";

import styles from './catalog-list.module.scss';

import mockApartments from "@data/apartments";

const CatalogList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let maxItems = 12;
  if (windowWidth < 768) {
    maxItems = 10;
  }

  const propertiesToShow = mockApartments.slice(0, maxItems);

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {propertiesToShow.map(({imgWebp, price, type, beds, square, nameDeveloper, nameComplex, nameDistrict, link }, index) => (
          <li className={styles.item} key={index}>
            <CatalogCard imgWebp={imgWebp} price={price} type={type} beds={beds} square={square} nameDeveloper={nameDeveloper} nameComplex={nameComplex} nameDistrict={nameDistrict} link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CatalogList;
