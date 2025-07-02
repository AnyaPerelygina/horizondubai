import { useState } from 'react';

import Link from '@ui/link/link';

import styles from './catalog-card.module.scss';
import { CatalogCardProps } from './catalog-card.types';

import Bed from '@assets/bed.svg';
import Square from '@assets/square.svg';
import ArrowRight from '@assets/arrow-right.svg';

const CatalogCard = ({ imgWebp, nameComplex, nameDistrict, link, price, type, beds, square, nameDeveloper }: CatalogCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img src={imgWebp} alt='Изображение недвижимости.' />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <span>{type}</span>
          <span>в&nbsp;{nameComplex}</span>
        </div>
        <div className={styles.wrappper}>
          <span className={styles.beds}>
            <Bed />
            {beds}&nbsp;спальни
          </span>
          <span className={styles.square}>
            <Square />
            {square}&nbsp;м&sup2;
          </span>
        </div>
        <div className={styles.district}>
          <span>Район:</span>
          <span>{nameDistrict}</span>
        </div>
        <div className={styles.developer}>
          <span>Застройщик:</span>
          <span>{nameDeveloper}</span>
        </div>
        <div className={styles.price}>
          <span>{price}&nbsp;$</span>
        </div>
        <div className={styles.link}>
          {!isMobile ? (
            <Link href={link} text={'Перейти'} color={'blue'} />
          ) : (
            <a href={link}>
              <ArrowRight />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default CatalogCard;
