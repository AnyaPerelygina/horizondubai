import { FC } from 'react';

import Hero from '@components/hero/hero';
import SubscriptionForm from '@components/form/subscription/subscription';
import About from '@components/about/about';
import PhoneBlock from '@components/phone-block/phone-block';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <SubscriptionForm />
      <About />
      <PhoneBlock />
    </>
  )
}

export default Home;
