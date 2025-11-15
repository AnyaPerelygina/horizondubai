import { Link } from 'react-router-dom';

import { SubnavProps } from './subnav.types';
import styles from './subnav.module.scss';

const Subnav = ({ onLinkClick, navLinks }: SubnavProps) => {
  return (
    <nav className={`${styles.root} ${styles.wrapper}`}>
      <ul className={styles.list}>
        {navLinks.map(({ href, label }) => (
          <li key={href} className={styles.item}>
            <Link onClick={onLinkClick} to={href} className={styles.link}>
              <span data-hover={label}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Subnav;
