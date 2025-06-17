import { FC } from 'react';
import Container from '@ui/container/container';
import Hero from '@components/hero/hero';
import About from '@components/about/about';

const Home: FC = () => {
  return (
    <Container>
      <Hero />
      <About />
    </Container>
  )
}

export default Home;
