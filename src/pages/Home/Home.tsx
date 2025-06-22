import { FC } from 'react';

import Hero from '@components/hero/hero';
import BlockToCatalog from '@components/block-to-catalog/block-to-catalog';
import LinkToCatalog from '@components/link-to-catalog/link-to-catalog';
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
      <BlockToCatalog />
      <LinkToCatalog />
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
