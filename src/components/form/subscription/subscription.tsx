import { useState } from 'react';

import Container from '@ui/container/container';
import styles from './subscription.module.scss';

import BackgroundBildingsWebp from '@assets/images/background/background-bildings.webp';
import BackgroundBildingsMobileWebp from '@assets/images/background/background-bildings-mobile.webp';
import BackgroundBildingsMobilePng from '@assets/images/background/background-bildings-mobile.png';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Поле обязательно к заполнению');
      return;
    }

    if (!validateEmail(email)) {
      setError('Введите корректный email');
      return;
    }

    try {
      // Пример отправки запроса на сервис подписки
      // const response = await fetch('/{тут api}/{тут код от сервиса подписки}', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // if (!response.ok) {
      //   throw new Error('Ошибка при отправке формы');
      // }

      // заглушка: имитируем отправку
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setEmail('');
    } catch (err) {
      setError('Не удалось отправить. Попробуйте позже.');
    }
  };

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.background}>
          <picture>
            <source type="image/webp" media="(max-width: 767px)" srcSet={BackgroundBildingsMobileWebp}></source>
            <source type="image/webp" media="(min-width: 768px)" srcSet={BackgroundBildingsWebp}></source>
            <img src={BackgroundBildingsMobilePng} alt='Изображение высоких зданий.' />
          </picture>
        </div>
        <div className={styles.motto}>
          <p>Подпишитесь на&nbsp;рассылку о&nbsp;новостях недвижимости</p>
        </div>
        <div className={styles.text}>
          <p>При&nbsp;подписке вы&nbsp;принимаете условия Пользовательского соглашения и&nbsp;Политики конфиденциальности</p>
        </div>
        <div className={styles.form}>
          <form method='post' autoComplete='off' onSubmit={handleSubmit} noValidate>
            <div className={styles.customInput} data-validate-type='email' data-message-base='Поле обязательно к заполнению' data-required='data-required'>
              <label>
                <input
                  type='email'
                  name='user-email'
                  placeholder='Ваш e-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <button className={styles.btn} type='submit'>Подписаться</button>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
      </Container>
    </section>
  )
}

export default SubscriptionForm;
