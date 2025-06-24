import { useEffect, useState } from "react";

import Container from "@ui/container/container";
import Title from "@ui/title/title";
import Link from "@ui/link/link";

import styles from './articles.module.scss';

import mockArticles from '@data/data-articles';

const Articles = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Title text={'Статьи'} level={2} variant={'bg'} className={styles.title} />
        <Link text={'Все статьи'} href={"#"} className={styles.mainLink} />
        <ul className={styles.list}>
          {mockArticles.map(({ photo, title, description, timeRead }, index) => (
            <li className={styles.item} key={index}>
              <a className={styles.link} href={'#'}>
                <div className={styles.photo}>
                  <img src={photo} alt='Превью статьи.' />
                  {isMobile && (
                    <span className={styles.timeRead}>{timeRead} минут</span>
                  )}
                </div>
                <Title text={`${title}`} level={3} variant={'bg'} className={styles.subTitle} />
                <div className={styles.desctiption}>
                  <p>{description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Articles;
