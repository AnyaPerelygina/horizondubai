import styles from './hero-page.module.scss';
import { HeroPageProps } from './hero-page.types';

const HeroPage = ({ nameDeveloper, photo }: HeroPageProps) => {
  const words = nameDeveloper.trim().split(' ');
  const top = words[0];
  const bottom = words.slice(1).join(' ');

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {top && <span className={styles.titleTop}>{top}</span>}
          {bottom && <span className={styles.titleBottom}>{bottom}</span>}
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
