import { Link } from 'react-router-dom';

import { NavProps } from './nav.types';
import styles from './nav.module.scss';

const Nav= ({ onLinkClick, className, navLinks }: NavProps) => {
  return (
    <nav className={`${styles.root} ${className}`}>
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

export default Nav;
