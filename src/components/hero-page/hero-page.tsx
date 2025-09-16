import styles from './hero-page.module.scss';
import { HeroPageProps } from './hero-page.types';

const HeroPage = ({ title, photo, pageType }: HeroPageProps) => {
  const words = title.trim().split(' ');
  const top = words.slice(0, -1).join(' ');
  const bottom = words[words.length - 1];

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {words.length > 1 ? (
            <>
              <span className={styles.titleTop}>
                {pageType === 'property' ? `ЖК в ${top}` : top}
              </span>
              <span className={styles.titleBottom}>
                {bottom}
              </span>
            </>
          ) : (
            <>
              <span className={styles.titleTop}>
                ЖК в
              </span>
              <span className={styles.titleBottom}>
                {bottom}
              </span>
            </>
          )}
        </div>
        <div className={styles.background}>
          <img src={photo} alt='Изображение жилого комплекса.' />
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default HeroPage;
