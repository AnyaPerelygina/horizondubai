import Container from '@ui/container/container';
import Link from '@ui/link/link';

import styles from './block-to-catalog.module.scss';

import Background from '@assets/images/background/background-go-to-catalog.webp';
import BackgroundMobile from '@assets/images/background/background-go-to-catalog-mobile.webp';
import BackgroundPngMobile from '@assets/images/background/background-go-to-catalog-mobile.png';

const BlockToCatalog = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.background}>
          <picture>
            <source type="image/webp" media="(max-width: 767px)" srcSet={BackgroundMobile}></source>
            <source type="image/webp" media="(min-width: 768px)" srcSet={Background}></source>
            <img src={BackgroundPngMobile} alt='Изображение территории ЖК.' />
          </picture>
        </div>
        <div className={styles.wrapperText}>
          <span className={styles.motto}>Уникальный выбор жилья в&nbsp;каталоге</span>
          <div className={styles.text}>
            <p>Больше 10000 предложений апартаментов, квартир и&nbsp;другой недвижимости, которых нет на&nbsp;сайтах!</p>
          </div>
          <Link text={'открыть каталог'} href={'/catalog'} className={styles.link} />
        </div>
      </Container>
    </section>
  )
}

export default BlockToCatalog;
