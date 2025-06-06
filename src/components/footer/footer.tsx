import Logo from '@ui/logo/logo';
import { Container } from '@ui/container/container';
import Nav from '@components/nav/nav';

import styles from './footer.module.scss';

const Footer = () => {
  const navLinks = [
    {
      href: '',
      label: 'Справочный центр',
    },
    {
      href: '',
      label: 'Юридические документы ',
    },
    {
      href: '',
      label: 'Тарифы и цены',
    },
    {
      href: '',
      label: 'Помощь',
    },
    {
      href: '',
      label: 'Поиск на карте',
    },
    {
      href: '',
      label: 'Проверка недвижимости',
    },
    {
      href: '',
      label: 'Карта сайта',
    },
    {
      href: '',
      label: 'Свежие объявления',
    }
  ]

  return (
    <footer>
      <Container className={styles.container}>
        <Nav navLinks={navLinks} className={styles.navigation}/>
        <Logo />
      </Container>
    </footer>
  );
};

export default Footer;
