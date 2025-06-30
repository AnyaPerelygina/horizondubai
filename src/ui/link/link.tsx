import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from './link.types';
import styles from './link.module.scss';

const Link = ({ text, className, href, color = 'white', children }: LinkProps) => {
  const classKey = color;
  const colorClass = styles[classKey] || '';

  // Внутренняя ссылка
  if (href.startsWith('/')) {
    return (
      <RouterLink className={`${styles.root} ${colorClass} ${className}`} to={href}>
        {children || text}
      </RouterLink>
    );
  }

  // Внешняя ссылка
  return (
    <a
      className={`${styles.root} ${colorClass} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || text}
    </a>
  );
};

export default Link;
