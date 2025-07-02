'use client';

import { useState, useEffect, useRef } from 'react';

import Logo from '@ui/logo/logo';
import Container from '@ui/container/container';
import Nav from '@components/nav/nav';
import Favorites from '@components/favorites/favorites';
import SocialMedia from '@components/social-media/social-media';

import MarkerSvg from '@assets/marker.svg';
import SendMarkerSvg from '@assets/send-marker.svg';
import WhatsAppSvg from '@assets/whatsapp.svg';
import TelegramSvg from '@assets/telegram.svg';
import PhoneSvg from '@assets/phone.svg';
import BurgerClose from '@assets/burger-close.svg';
import BurgerOpen from '@assets/burger-open.svg';

import styles from './header.module.scss';

const Header = () => {
  const navLinks = [
    {
      href: '/catalog',
      label: 'Продажа',
    },
    {
      href: '/catalog',
      label: 'Аренда',
    },
    {
      href: '/catalog',
      label: 'Новостройки',
    },
    {
      href: '/catalog',
      label: 'Виллы',
    },
    {
      href: '/contacts',
      label: 'Контакты',
    }
  ]

  const socialMediaLinks = [
    {
      href: 'https://web.whatsapp.com',
      Icon: WhatsAppSvg,
      label: 'вотсап'
    },
    {
      href: 'https://web.telegram.org',
      Icon: TelegramSvg,
      label: 'телеграм'
    },
    {
      href: 'tel:+72322322323',
      Icon: PhoneSvg,
      label: 'телефон',
      className: 'customLink'
    }
  ]

  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [headerRef]);

  return (
    <header className={`${styles.root} ${isOpen ? styles.rootOpened : ''}`}>
      {isMobile ? (
        <Container className={styles.container}>
          <Logo className={styles.logo} />
          <div className={styles.wrapperMobile}>
            <Favorites className={styles.favorites} />
            <button className={`${styles.toggle} ${isOpen ? styles['is-opened'] : ''}`} onClick={() => setIsOpen(!isOpen)}>
              <div className={styles.toggleClosed}>
                <BurgerClose />
              </div>
              <div className={styles.toggleOpened}>
                <BurgerOpen />
              </div>
            </button>
          </div>
          <div className={styles.marker}>
            <SendMarkerSvg />
            <span>Дубай</span>
          </div>
          <Nav navLinks={navLinks} className={styles.navigation} onLinkClick={() => setIsOpen(false)} />
          <SocialMedia socialMediaLinks={socialMediaLinks} className={styles.socialMedia} />
        </Container>
      ) : (
        <Container className={styles.container}>
          <div className={styles.wrapper1}>
            <Logo />
            <Nav navLinks={navLinks} className={styles.navigation} />
          </div>

          <div className={styles.wrapper2}>
            <div className={styles.marker}>
              <MarkerSvg />
              <span>Дубай</span>
            </div>
            <Favorites className={styles.favorites} />
            <SocialMedia socialMediaLinks={socialMediaLinks} className={styles.socialMedia} />
          </div>
        </Container>
      )}
    </header>
  );
};

export default Header;
