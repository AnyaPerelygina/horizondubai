import { FC } from 'react';

import Hero from '@components/hero/hero';
import About from '@components/about/about';
import Questions from '@components/questions/questions';
import SubscriptionForm from '@components/form/subscription/subscription';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <SubscriptionForm />
      <About />
      <Questions />
    </>
  )
}

export default Home;
