import { JSX } from 'react';

import styles from './title.module.scss';
import { TitleProps } from './title.types';

const Title = ({ className = '', text, level, variant = 'sm' }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classKey = variant ? `h${level}${variant[0].toUpperCase()}${variant.slice(1)}` : '';
  const levelClass = styles[classKey] || '';

  return (
    <Tag className={`${styles.root} ${levelClass} ${className}`}>
      {text}
    </Tag>
  );
};

export default Title;
