import Container from '@ui/container/container';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <h1>Продажа и аренда новостроек в Дубаи</h1>
      </Container>
    </section>
  )
}

export default Hero;
