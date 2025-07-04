import { FC } from 'react';

import Hero from '@components/hero/hero';
import ReliableProjects from '@components/reliable-projects/reliable-projects';
import BlockToCatalog from '@components/block-to-catalog/block-to-catalog';
import Relevant from '@components/relevant/relevant';
import LinkToCatalog from '@components/link-to-catalog/link-to-catalog';
import Districts from '@components/districts/districts';
import Developers from '@components/developers/developers';
import News from '@components/news/news';
import Articles from '@components/articles/articles';
import Questions from '@components/questions/questions';
import SubscriptionForm from '@components/form/subscription/subscription';
import About from '@components/about/about';
import PhoneBlock from '@components/phone-block/phone-block';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <ReliableProjects />
      <BlockToCatalog />
      <Relevant />
      <LinkToCatalog />
      <Districts />
      <Developers />
      <News />
      <Articles />
      <Questions />
      <SubscriptionForm />
      <About />
      <PhoneBlock />
    </>
  )
}

export default Home;
