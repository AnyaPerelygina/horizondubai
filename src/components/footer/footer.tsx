import { useState } from 'react';

import Logo from '@ui/logo/logo';
import Container from '@ui/container/container';
import Nav from '@components/nav/nav';
import SocialMedia from '@components/social-media/social-media';

import styles from './footer.module.scss';

import VkontakteSvg from '@assets/vkontakte.svg';
import InstagramSvg from '@assets/instagram.svg';
import TiktokSvg from '@assets/tiktok.svg';
import YoutubeSvg from '@assets/youtube.svg';

const Footer = () => {
  const navLinks = [
    {
      href: '/catalog?dealType=Купить',
      label: 'Продажа',
    },
    {
      href: '/catalog?dealType=Арендовать',
      label: 'Аренда',
    },
    {
      href: '/catalog?propertyType=Новостройки',
      label: 'Новостройки',
    },
    {
      href: '/catalog?propertyType=Виллы',
      label: 'Виллы',
    },
    {
      href: '/privacy-polity',
      label: 'Политика конфиденциальности',
    },
    {
      href: '/documents',
      label: 'Юридические документы ',
    },
    {
      href: '/contacts',
      label: 'Контакты',
    },
  ]

  const socialMediaLinks = [
    {
      href: 'https://vk.com',
      Icon: VkontakteSvg,
      label: 'вконтакте'
    },
    {
      href: 'https://instagram.com',
      Icon: InstagramSvg,
      label: 'инстаграм'
    },
    {
      href: 'https://tiktok.com',
      Icon: TiktokSvg,
      label: 'тикток'
    },
    {
      href: 'https://youtube.com',
      Icon: YoutubeSvg,
      label: 'ютуб'
    },
  ]

  const [isMobile, setIsMobile] = useState(false);

  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <footer className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.text}>
          <p>Horizon Dubai — база данных о&nbsp;недвижимости. Использование сайта означает согласие с&nbsp;Пользовательским соглашением и&nbsp;Политикой конфиденциальности Horizon Dubai. Оплачивая лицензионный платеж, вы&nbsp;принимаете Лицензионное соглашение.</p>
        </div>
        <Nav navLinks={navLinks} className={styles.navigation}/>
        {!isMobile ? (
          <div className={styles.wrapper}>
            <Logo className={styles.logo} />
            <SocialMedia socialMediaLinks={socialMediaLinks} className={styles.socialMedia} />
          </div>
        ) : (
          <>
            <Logo className={styles.logo} />
            <SocialMedia socialMediaLinks={socialMediaLinks} className={styles.socialMedia} />
          </>
        )}
      </Container>
    </footer>
  );
};

export default Footer;
