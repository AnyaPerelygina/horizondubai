import { useEffect, useState } from "react";

import Container from "@ui/container/container";
import Link from "@ui/link/link";
import Title from "@ui/title/title";

import styles from './news.module.scss';

import mockUsersNews from '@data/news';

const News = () => {
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
        <div className={styles.wrapper}>
          {!isMobile ? (
            <div className={styles.subWrapper}>
              <Title text={'Новости'} level={2} variant={'bg'} className={styles.title}></Title>
              <Link text={'Все новости'} href={"#"} className={styles.mainLink} />
            </div>
          ) : (
            <div className={styles.subWrapper}>
              <Title text={'Новости'} level={2} variant={'bg'} className={styles.title}></Title>
            </div>
          )}
        </div>
        <ul className={styles.list}>
          {mockUsersNews.map(({ title, dateNews, description }) => (
            <li className={styles.item}>
              <a className={styles.link} href={'#'}>
                <span className={styles.dateNews}>{dateNews}</span>
                <span className={styles.subTitle}>{title}</span>
                <div className={styles.description}>
                  <p>{description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {isMobile && (
          <div className={styles.wrapperLink}>
            <Link text={'Все новости'} href={"#"} className={styles.mainLink} />
          </div>
        )}
      </Container>
    </section>
  )
}

export default News;
