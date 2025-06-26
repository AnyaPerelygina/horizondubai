import Container from '@ui/container/container';
import FilterForm from '@components/filters/filter-form/filter-form';

import styles from './hero.module.scss';

import BackgroundArrayMobilePng from '@assets/images/background/background-array-mobile.png';
import BackgroundArrayMobileWebp from '@assets/images/background/background-array-mobile.webp';
import BackgroundArrayWebp from '@assets/images/background/background-array.webp';

const Hero = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper1}>
          <div className={styles.title1}>
            <span>Продажа и&nbsp;аренда</span>
          </div>
          <div className={styles.text}>
            <p>Первопричиной снижения цен считается увеличение числа предложений на&nbsp;рынке недвижимости, что&nbsp;позволяет эмирату быть на&nbsp;третьем месте в&nbsp;списке городов мира.</p>
          </div>
        </div>

        <div className={styles.wrapper2}>
          <div className={styles.wrapperContent}>
            <div className={styles.title2}>
              <span>Новостроек в&nbsp;Дубаи</span>
            </div>
            <div className={styles.form}>
              <FilterForm />
            </div>
          </div>
          <div className={styles.background}>
            <picture>
              <source type="image/webp" media="(max-width: 767px)" srcSet={BackgroundArrayMobileWebp}></source>
              <source type="image/webp" media="(min-width: 768px)" srcSet={BackgroundArrayWebp}></source>
              <img src={BackgroundArrayMobilePng} alt='Изображение Array Apartaments.' />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero;
