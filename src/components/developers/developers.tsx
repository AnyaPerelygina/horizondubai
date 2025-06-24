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

const Developers = () => {
  const sliders = [
    {
      title: 'Serenia Residences',
      text: 'Serenia Residences — это скрытая жемчужина на острове Пальма Джумейра, предназначенная для избранных. Эта великолепная недвижимость представляет собой частный жилой курорт, предлагающий элитную коллекцию апартаментов с 1, 2 и 3 спальнями, а также пентхаусы, занимающие половину этажа.',
      link1: '#',
      link2: '#',
      price: '43 200',
      developerName: 'Serenia Residences'
    },
    {
      title: 'Six Senses The Palm',
      text: 'Six Senses The Palm - это захватывающий дух проект класса люкс, расположенный на Palm Jumeirah, одном из самых желанных мест для жизни в Дубае. Новый комплекс Six Senses Hotels Resorts Spas станет первым отелем с фирменными резиденциями в Объединенных Арабских Эмиратах.',
      link1: '#',
      link2: '#',
      price: '55 100',
      developerName: 'Six Senses The Palm'
    },
    {
      title: 'Palm Jumeirah',
      text: 'Palm Jumeirah — это скрытая жемчужина на острове Пальма Джумейра, предназначенная для избранных. Эта великолепная недвижимость представляет собой частный жилой курорт, предлагающий элитную коллекцию апартаментов с 1, 2 и 3 спальнями, а также пентхаусы, занимающие половину этажа.',
      link1: '#',
      link2: '#',
      price: '96 800',
      developerName: 'Palm Jumeirah'
    },
    {
      title: 'Azizi Mina DAMAS',
      text: 'Azizi Mina — это скрытая жемчужина на острове Пальма Джумейра, предназначенная для избранных. Эта великолепная недвижимость представляет собой частный жилой курорт, предлагающий элитную коллекцию апартаментов с 1, 2 и 3 спальнями, а также пентхаусы, занимающие половину этажа.',
      link1: '#',
      link2: '#',
      price: '36 700',
      developerName: 'Azizi Mina'
    }
  ]

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
          effect='fade'
          fadeEffect={{ crossFade: true }}
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
          {sliders.map(({ title, link1, link2, text, price, developerName }, index) =>
            <SwiperSlide key={index}>
              <div className={styles.wrapper}>
                <Title text={title} level={3} className={styles.subTitle} />
                <div className={styles.text}>
                  <p>{text}</p>
                </div>
                <div className={styles.links}>
                  <Link text={'Объекты застройщика'} href={link1} className={styles.link} />
                  <Link text={'Больше о застройщике'} href={link2} color={'blue'} className={styles.link} />
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
                    <span>{developerName}</span>
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
