import { Link } from 'react-router-dom';

import FavoritesIcon from '@assets/favorites.svg';

import styles from './favorites.module.scss';

const Favorites = () => {
  return (
    <div className={styles.root}>
      <Link to={'#'}>
        <FavoritesIcon />
      </Link>
    </div>
  )
}

export default Favorites;
