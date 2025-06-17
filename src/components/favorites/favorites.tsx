import { Link } from 'react-router-dom';

import FavoritesIcon from '@assets/favorites.svg';

import styles from './favorites.module.scss';
import { FavoritesProps } from './favorites.types';

const Favorites = ({className}: FavoritesProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <Link to={'#'} className={styles.link}>
        <FavoritesIcon />
      </Link>
    </div>
  )
}

export default Favorites;
