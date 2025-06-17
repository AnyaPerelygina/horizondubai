import Title from '@ui/title/title';
import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.root}>
      <Title text={'О компании'} level={2} variant={'sm'} />
    </div>
  )
}

export default About;
