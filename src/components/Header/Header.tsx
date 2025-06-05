import Logo from '@ui/logo/logo';
import { Container } from '@ui/container/container';
import Nav from '@components/nav/nav';

import MarkerSvg from '@assets/marker.svg';

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

  return (
    <header>
      <Container className={styles.container}>
        <Logo />
        <Nav navLinks={navLinks} className={styles.navigation} />
        <div className={styles.marker}>
          <img src={MarkerSvg} alt='Маркер' />
          <span>Дубай</span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
