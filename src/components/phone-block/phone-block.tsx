import Container from '@ui/container/container';
import styles from './phone-block.module.scss';

import PhoneSvg from '@assets/phone.svg';
import BackgroundBeach from '@assets/images/background/background-beach.webp';

const Phone = () => {
  return (
    <section className={styles.root}>
      <div className={styles.background}>
        <img src={BackgroundBeach} alt='Изображение бухты.' />
      </div>
      <Container className={styles.container}>
        <div className={styles.motto}>
          <p>Начните&nbsp;поиск недвижимости прямо&nbsp;сейчас!</p>
        </div>
        <div className={styles.text}>
          <p>Если у&nbsp;вас&nbsp;возникли сложности или&nbsp;появились вопросы - свяжитесь с&nbsp;нашими&nbsp;менеджерами по&nbsp;телефону:</p>
          <a className={styles.phone} href='tel:+72322322323'>
            <PhoneSvg />
            <span>+ 7 232-232-23-23</span>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Phone;
