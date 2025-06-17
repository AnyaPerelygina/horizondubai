import { FC } from 'react';

import Hero from '@components/hero/hero';
import About from '@components/about/about';
import Questions from '@components/questions/questions';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Questions />
    </>
  )
}

export default Home;
