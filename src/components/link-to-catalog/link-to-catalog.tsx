import Container from '@ui/container/container';

import styles from './link-to-catalog.module.scss';

import Arrow from '@assets/arrow-top.svg';
import Photo1 from '@assets/images/link-to-catalog/link-to-catalog-1.webp';
import Photo2 from '@assets/images/link-to-catalog/link-to-catalog-2.webp';
import Photo3 from '@assets/images/link-to-catalog/link-to-catalog-3.webp';
import Photo4 from '@assets/images/link-to-catalog/link-to-catalog-4.webp';
import Photo5 from '@assets/images/link-to-catalog/link-to-catalog-5.webp';
import Photo6 from '@assets/images/link-to-catalog/link-to-catalog-6.webp';

const LinkToCatalog = () => {
  const infoLink = [
    {
      title: 'Новостройки',
      count: '350',
      img: Photo1,
      link: '/catalog#newbildings'
    },
    {
      title: 'Квартиры',
      count: '1 240',
      img: Photo6,
      link: '/catalog#flats'
    },
    {
      title: 'Виллы',
      count: '100',
      img: Photo3,
      link: '/catalog#villas'
    },
    {
      title: 'Апартаменты',
      count: '2 700',
      img: Photo2,
      link: '/catalog#appartments'
    },
    {
      title: 'Лофт',
      count: '40',
      img: Photo4,
      link: '/catalog#lofts'
    },
    {
      title: 'Пентхаус',
      count: '80',
      img: Photo5,
      link: '/catalog#penthaus'
    }
  ]

  return (
    <section className={styles.root}>
      <Container>
        <ul className={styles.list}>
          {infoLink.map(({ link, title, count, img }, index) =>
            <li className={styles.item} key={index}>
              <a href={link} target='_blank' className={styles.link}>
                <div className={styles.wrapperText}>
                  <div className={styles.title}>
                    <span>{title}</span>
                    <span>в&nbsp;Дубаи
                      <Arrow />
                    </span>
                  </div>
                  <span className={styles.count}>{count} предложений</span>
                </div>
                <div className={styles.img}>
                  <img src={img} alt='Изображение недвижимости.' />
                </div>
              </a>
            </li>
          )}
        </ul>
      </Container>
    </section>
  )
}

export default LinkToCatalog;
