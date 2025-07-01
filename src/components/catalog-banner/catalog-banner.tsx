import Container from '@ui/container/container';

import styles from './catalog-banner.module.scss';

import BannerWebpMobile from '@assets/images/catalog/catalog-banner-mobile.webp';
import BannerWebp from '@assets/images/catalog/catalog-banner.webp';
import BannerPngMobile from '@assets/images/catalog/catalog-banner-modile.png';

const CatalogBanner = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.img}>
          <picture>
            <source type="image/webp" media="(max-width: 1023px)" srcSet={BannerWebpMobile}></source>
            <source type="image/webp" media="(min-width: 1024px)" srcSet={BannerWebp}></source>
            <img src={BannerPngMobile} alt='Изображение бассейна с крыши.' />
          </picture>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.motto}>
            <p>Квартиры с&nbsp;невероятным видом на&nbsp;море </p>
          </div>
          <div className={styles.info}>
            <span>Azizi mina palm jumeirah</span>
            <span>от&nbsp;43&nbsp;240&nbsp;$</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CatalogBanner;
