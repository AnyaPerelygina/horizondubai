import React from 'react';

import { ContainerProps } from './container.types';
import styles from './container.module.scss';

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
