import { useEffect, useState } from "react";

import Container from "@ui/container/container";
import Link from "@ui/link/link";
import Title from "@ui/title/title";

import styles from './questions.module.scss';

import mockUsersQuestions from '@data/users';
import Comments from '@assets/comments.svg';

const Questions = () => {
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
              <Title text={'Вопросы'} level={2} variant={'bg'} className={styles.title}></Title>
              <Link text={'Все вопросы'} href={"#"} className={styles.mainLink} />
            </div>
          ) : (
            <div className={styles.subWrapper}>
              <Title text={'Вопросы'} level={2} variant={'bg'} className={styles.title}></Title>
            </div>
          )}
        </div>
        <ul className={styles.list}>
          {mockUsersQuestions.map(({ nameUsers, dateUser, question, answers }, index) => (
            <li className={styles.item} key={index}>
              <a className={styles.link} href={'#'}>
                <div className={styles.infoUsers}>
                  <span className={styles.name}>{nameUsers}</span>
                  <span className={styles.dot}></span>
                  <span className={styles.date}>{dateUser}</span>
                </div>
                <span className={styles.question}>{question}</span>
                <div className={styles.linkAnswers}>
                  <Comments />
                  <span>{`${answers} совета`}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {isMobile && (
          <div className={styles.wrapperLink}>
            <Link text={'Все вопросы'} href={"#"} className={styles.mainLink} />
          </div>
        )}
      </Container>
    </section>
  )
}

export default Questions;
