import Title from '@ui/title/title';
import Container from '@ui/container/container';

import styles from './about.module.scss';
import Link from '@ui/link/link';

const About = () => {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <Title text={'О компании'} level={2} variant={'sm'} className={styles.title} />
        <div className={styles.motto}>
          <span>Выгодные цены на&nbsp;недвижимость в&nbsp;Дубаи</span>
        </div>
        <div className={styles.text}>
          <p>Serenia Residences — это&nbsp;скрытая жемчужина на&nbsp;Пальме Джумейра, место для&nbsp;избранных. Этот&nbsp;великолепный объект — частный жилой курорт, предлагающий элитную коллекцию апартаментов с&nbsp;1, 2 и&nbsp;3 спальнями, а&nbsp;также пентхаусы на&nbsp;полэтажа. Всё&nbsp;это&nbsp;расположено в&nbsp;потрясающем месте с&nbsp;видом на&nbsp;Пальму, Atlantis, Бурдж Аль Араб, линию небоскрёбов Dubai Marina и&nbsp;завораживающие голубые воды Персидского залива.</p>
        </div>
        <ul className={styles.reasons}>
          <li className={styles.item}>
            <span>0%</span>
            <span>Работаем без комиссии</span>
          </li>
          <li className={styles.item}>
            <span>2.99%</span>
            <span>Доступная ипотека</span>
          </li>
          <li className={styles.item}>
            <span>2010</span>
            <span>Год основания компании</span>
          </li>
          <li className={styles.item}>
            <span>1899</span>
            <span>Проведенных сделок</span>
          </li>
        </ul>
        <div className={styles.links}>
          <Link text={'Больше о компании'} href={'#'} />
          <Link text={'Видео о нас'} href={'https://youtu.be/anmELORT8Zk?si=bFb7mlBn-1R3lw2I'} color={'blue'} />
        </div>
      </Container>
    </div>
  )
}

export default About;
