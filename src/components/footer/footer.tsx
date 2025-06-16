import Logo from '@ui/logo/logo';
import { Container } from '@ui/container/container';
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
      href: '',
      label: 'Политика конфиденциальности',
    },
    {
      href: '',
      label: 'Юридические документы ',
    },
        {
      href: '',
      label: 'Контакты',
    },
  ]

  const socialMediaLinks = [
    {
      href: '#',
      Icon: VkontakteSvg,
      label: 'вконтакте'
    },
        {
      href: '#',
      Icon: InstagramSvg,
      label: 'инстаграм'
    },
    {
      href: '#',
      Icon: TiktokSvg,
      label: 'тикток'
    },
    {
      href: '#',
      Icon: YoutubeSvg,
      label: 'ютуб'
    },
  ]

  return (
    <footer className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.text}>
          <p>Horizon Dubai — база данных о&nbsp;недвижимости. Использование сайта означает согласие с&nbsp;Пользовательским соглашением и&nbsp;Политикой конфиденциальности Horizon Dubai. Оплачивая лицензионный платеж, вы&nbsp;принимаете Лицензионное соглашение.</p>
        </div>
        <Nav navLinks={navLinks} className={styles.navigation}/>
        <Logo className={styles.logo} />
        <SocialMedia socialMediaLinks={socialMediaLinks} className={styles.socialMedia} />
      </Container>
    </footer>
  );
};

export default Footer;
