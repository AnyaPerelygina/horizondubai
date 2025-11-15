import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SubnavProps } from './subnav.types';
import styles from './subnav.module.scss';

const Subnav = ({ onLinkClick, navLinks }: SubnavProps) => {
  const [active, setActive] = useState<string>(navLinks[0]?.href || '');

  const handleClick = () => {
    onLinkClick?.();
  };

  return (
    <nav className={`${styles.root} ${styles.wrapper}`}>
      <ul className={styles.list}>
        {navLinks.map(({ href, label }) => (
          <li key={href} className={styles.item}>
            <Link
              to={href}
              onClick={handleClick}
              onMouseEnter={() => setActive(href)}
              className={`${styles.link} ${active === href ? styles.active : ''}`}
            >
              <span data-hover={label}>{label}</span>
            </Link>
            <div className={`${styles.dropdown} ${active === href ? styles.open : ''}`}>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Subnav;
