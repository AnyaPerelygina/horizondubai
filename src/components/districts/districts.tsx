import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Container from '@ui/container/container';
import Title from '@ui/title/title';

import styles from './districts.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

import Arrow from '@assets/arrow-small.svg';
import ArrowRight from '@assets/arrow-right.svg';
import District1 from '@assets/images/districts/photo-1.webp';
import District2 from '@assets/images/districts/photo-2.webp';
import District3 from '@assets/images/districts/photo-3.webp';

const Districts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sliders = [
    {
      img: District1,
      link: '#',
      developerName: 'Bur Dubai',
      price: '43 240',
      count: 10
    },
    {
      img: District2,
      link: '#',
      developerName: 'Downtown Dubai',
      price: '55 900',
      count: 22
    },
    {
      img: District3,
      link: '#',
      developerName: 'Dubai Marina',
      price: '99 976',
      count: 11
    },
    {
      img: District3,
      link: '#',
      developerName: 'Dubai Volodya',
      price: '120 589',
      count: 7
    }
  ]

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Title text={'Районы'} level={2} variant={'bg'} className={styles.title} />
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
            320: {
              slidesPerView: 'auto',
              spaceBetween: 10,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1024: {
              slidesPerView: 3,
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
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`
          }}>
          {sliders.map(({ developerName, price, count, img, link }, index) =>
            <SwiperSlide key={index}>
              <div className={styles.wrapper}>
                <div className={styles.img}>
                  <img src={img} alt='Изображение территории ЖК.' />
                </div>
                <div className={styles.description}>
                  <span className={styles.developerName}>{developerName}</span>
                  <div className={styles.info}>
                    <span>от&nbsp;{price}&nbsp;$</span>
                    <span className={styles.dot}></span>
                    <span>{count}&nbsp;предложений</span>
                  </div>
                </div>
                <a href={link} target='_blank' className={styles.link}>
                  <ArrowRight />
                </a>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </Container>
    </section>
  )
}

export default Districts;
