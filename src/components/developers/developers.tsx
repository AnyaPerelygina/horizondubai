import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

import Title from '@ui/title/title';
import Link from '@ui/link/link';
import Container from '@ui/container/container';

import styles from './developers.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Developer1 from '@assets/images/developers/developer-1.webp';
import Developer1Mobile from '@assets/images/developers/developer-1-mobile.webp';
import Developer1Png from '@assets/images/developers/developer-1.png';
import Arrow from '@assets/arrow-small.svg';

import mockDevelopers from '@data/developers';

const Developers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Title text={'Застройщики'} level={2} variant={'sm'} className={styles.title} />
        <div className={styles.swiperButtons}>
          <button ref={prevRef} className={styles.swiperPrev}>
            <Arrow />
          </button>
          <button ref={nextRef} className={styles.swiperNext}>
            <Arrow />
          </button>
        </div>
        <Swiper
          modules={[ Navigation, Pagination, EffectFade ]}
          slidesPerView={1}
          spaceBetween={50}
          speed={1500}
          breakpoints={{
            320: {
              allowTouchMove: true,
            },
            768: {
              allowTouchMove: false
            },
            1024: {
              allowTouchMove: false
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`
          }}
          className={styles.swiper}>
          {mockDevelopers.map(({ link1, text, price, nameDeveloper, developerKey }, index) =>
            <SwiperSlide key={developerKey}>
              <div className={styles.wrapper}>
                <Title text={nameDeveloper} level={3} className={styles.subTitle} />
                <div className={styles.text}>
                  <p>{text}</p>
                </div>
                <div className={styles.links}>
                  <Link text={'Объекты застройщика'} href={link1} className={styles.link} />
                  <Link text={'Больше о застройщике'} href={`/developer/${developerKey}`} color={'blue'} className={styles.link} />
                </div>
                <div className={styles.description}>
                  <div className={styles.img}>
                    <picture>
                      <source type="image/webp" media="(max-width: 767px)" srcSet={Developer1Mobile} />
                      <source type="image/webp" media="(min-width: 768px)" srcSet={Developer1} />
                      <img src={Developer1Png} alt='Изображение территории ЖК.' />
                    </picture>
                  </div>
                  <div className={styles.info}>
                    <span>{nameDeveloper}</span>
                    <span>от {price}$</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <div className={styles.pagination}></div>
      </Container>
    </section>
  )
}

export default Developers;
