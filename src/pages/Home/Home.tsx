import { FC } from 'react';

import Hero from '@components/hero/hero';
import Questions from '@components/questions/questions';
import SubscriptionForm from '@components/form/subscription/subscription';
import About from '@components/about/about';
import PhoneBlock from '@components/phone-block/phone-block';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Questions />
      <SubscriptionForm />
      <About />
      <PhoneBlock />
    </>
  )
}

export default Home;
