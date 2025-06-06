import Logo from '@ui/logo/logo';
import { Container } from '@ui/container/container';
import Nav from '@components/nav/nav';
import Favorites from '@components/favorites/favorites';
import SocialMedia from '@components/social-media/social-media';

import MarkerSvg from '@assets/marker.svg';
import WhatsAppSvg from '@assets/whatsapp.svg';
import TelegramSvg from '@assets/telegram.svg';
import PhoneSvg from '@assets/phone.svg';

import styles from './header.module.scss';

const Header = () => {
  const navLinks = [
    {
      href: '/sale',
      label: 'Продажа',
    },
    {
      href: '/rent',
      label: 'Аренда',
    },
    {
      href: '/new-buildings',
      label: 'Новостройки',
    },
    {
      href: '/villas',
      label: 'Виллы',
    },
    {
      href: '/contacts',
      label: 'Контакты',
    }
  ]

  const socialMediaLinks = [
    {
      href: '#',
      Icon: WhatsAppSvg,
      label: 'вотсап'
    },
        {
      href: '#',
      Icon: TelegramSvg,
      label: 'телеграм'
    },
    {
      href: '#',
      Icon: PhoneSvg,
      label: 'телефон',
      className: 'customLink'
    }
  ]

  return (
    <header className={styles.root}>
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
          <Favorites />
          <SocialMedia socialMediaLinks={socialMediaLinks} className={styles.socialMedia} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
