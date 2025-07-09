import React from 'react';

import styles from './breadcrumbs.module.scss';
import { BreadcrumbsProps } from './breadcrumbs.types';

const Breadcrumbs = ({ totalCount, filters }: BreadcrumbsProps) => {
  return (
    <div className={styles.root}>
      <span>Недвижимость в Дубаи</span>
      {filters.map((item, index) => (
        <React.Fragment key={index}>
          <span className={styles.dot}></span>
          <span>{item}</span>
        </React.Fragment>
      ))}
      <span className={styles.dot}></span>
      <span>{totalCount}&nbsp;предложений</span>
    </div>
  );
};

export default Breadcrumbs;
