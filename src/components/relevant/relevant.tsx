import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Container from '@ui/container/container';
import Title from '@ui/title/title';
import Link from '@ui/link/link';

import Arrow from '@assets/arrow-small.svg';
import ArrowRight from '@assets/arrow-right.svg';
import Bed from '@assets/bed.svg';
import Square from '@assets/square.svg';

import styles from './relevant.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

import mockApartments from '@data/apartments';

const Relevant = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth > 767);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Title text={'Актуально'} level={2} variant={'bg'} className={styles.title} />
        {isDesktop && (
          <>
            <div className={styles.swiperButtons}>
              <button ref={prevRef} className={styles.swiperPrev}>
                <Arrow />
              </button>
              <button ref={nextRef} className={styles.swiperNext}>
                <Arrow />
              </button>
            </div>
            <Swiper
              modules={[Navigation]}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                  allowTouchMove: false
                }
              }}
              loop
              speed={1500}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}>
            {mockApartments.filter((item) => item.relevant).map(({ imgWebp, imgWebpMobile, imgPng, link, type, nameDeveloper, beds, square, price }, index) =>
              <SwiperSlide key={index}>
                <a href={link} className={styles.card} target={'_blank'}>
                  <div className={styles.img}>
                     <picture>
                      <source type="image/webp" media="(max-width: 767px)" srcSet={imgWebpMobile} />
                      <source type="image/webp" media="(min-width: 768px)" srcSet={imgWebp} />
                      <img src={imgPng} alt='Изображение территории ЖК.' />
                    </picture>
                  </div>
                  <div className={styles.arrow}>
                    <ArrowRight />
                  </div>
                  <div className={styles.description}>
                    <span className={styles.type}>{type}</span>
                    <span className={styles.nameDeveloper}>{nameDeveloper}</span>
                    <span className={styles.beds}>
                      <Bed />
                      {beds}&nbsp;спальни
                    </span>
                    <span className={styles.square}>
                      <Square />
                      {square}&nbsp;м&sup2;
                    </span>
                    <span className={styles.price}>от&nbsp;{price}&nbsp;$</span>
                  </div>
                </a>
              </SwiperSlide>
            )}
            </Swiper>
          </>
        )}

        {!isDesktop && (
          <>
            <ul className={styles.list}>
              {mockApartments.slice(0, 4).map(({ imgWebp, imgWebpMobile, imgPng, link, type, nameDeveloper, beds, square, price }, index) =>
                <li className={styles.item} key={index}>
                  <a href={link} className={styles.card} target={'_blank'}>
                    <div className={styles.img}>
                      <picture>
                        <source type="image/webp" media="(max-width: 767px)" srcSet={imgWebpMobile} />
                        <source type="image/webp" media="(min-width: 768px)" srcSet={imgWebp} />
                        <img src={imgPng} alt='Изображение территории ЖК.' />
                      </picture>
                    </div>
                    <div className={styles.arrow}>
                      <ArrowRight />
                    </div>
                    <div className={styles.description}>
                      <span className={styles.type}>{type}</span>
                      <span className={styles.nameDeveloper}>{nameDeveloper}</span>
                      <span className={styles.beds}>
                        <Bed />
                        {beds}&nbsp;спальни
                      </span>
                      <span className={styles.square}>
                        <Square />
                        {square}&nbsp;кв.м.
                      </span>
                      <span className={styles.price}>от&nbsp;{price}&nbsp;$</span>
                    </div>
                  </a>
                </li>
              )}
            </ul>
            <Link text={'Смотреть все предложения'} href={'/catalog'} color={'blue'} />
          </>
        )}
      </Container>
    </section>
  )
}

export default Relevant;
