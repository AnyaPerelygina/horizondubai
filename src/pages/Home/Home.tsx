import { FC } from 'react';

import Hero from '@components/hero/hero';
import About from '@components/about/about';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Home;
