import { Link, useLocation  } from 'react-router-dom';

import LogoImg from '@assets/logo/logo.webp';

import styles from './logo.module.scss';

const Logo = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={styles.root}>
      {isHome ? (
        <img src={LogoImg} alt="Logo" />
      ): <Link to="/home">
        <img src={LogoImg} alt="Logo" />
      </Link>
      }
    </div>
  );
};

export default Logo;
