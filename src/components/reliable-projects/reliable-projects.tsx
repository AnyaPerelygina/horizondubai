import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Container from '@ui/container/container';
import Title from '@ui/title/title';

import styles from './reliable-projects.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

import Arrow from '@assets/arrow-small.svg';
import ArrowRight from '@assets/arrow-right.svg';

import mockApartments from '@data/apartments';

const ReliableProjects = () => {
  const tabs = [
    { label: 'все', value: 'all' },
    { label: 'апартаменты', value: 'апартаменты' },
    { label: 'виллы', value: 'виллы' },
    { label: 'пентхаусы', value: 'пентхаусы' },
    { label: 'лофты', value: 'лофты' },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = mockApartments.filter(
    (item) =>
      item.reliable &&
      (activeTab === 'all' || item.type === activeTab)
  );

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Title text={'Надежные проекты'} level={2} variant={'bg'} className={styles.title} />
        <div className={styles.swiperButtons}>
          <button ref={prevRef} className={styles.swiperPrev}>
            <Arrow />
          </button>
          <button ref={nextRef} className={styles.swiperNext}>
            <Arrow />
          </button>
        </div>
        <div className={styles.tabs}>
          <div className={styles.buttons}>
            {tabs.map(({ label, value }) => (
              <button
                key={value}
                className={activeTab === value ? styles.activeTab : ''}
                onClick={() => setActiveTab(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 20,
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
            }}>
              {filteredProjects.filter((item) => item.reliable).map(({imgWebp, link, type, nameDeveloper, price }, index) =>
                <SwiperSlide key={index}>
                  <a href={link} className={styles.card} target={'_blank'}>
                    <div className={styles.img}>
                      <img src={imgWebp} alt='Изображение территории ЖК.' />
                    </div>
                    <div className={styles.arrow}>
                      <ArrowRight />
                    </div>
                    <div className={styles.description}>
                      <span className={styles.type}>{type}</span>
                      <span className={styles.nameDeveloper}>{nameDeveloper}</span>
                      <span className={styles.price}>от&nbsp;{price}&nbsp;$</span>
                    </div>
                  </a>
                </SwiperSlide>
              )}
            </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default ReliableProjects;
