import { FC } from 'react';

import HeroPage from '@components/hero-page/hero-page';
import PhoneBlock from '@components/phone-block/phone-block';
import mockDevelopers from '@data/developers';

const DeveloperPage: FC = () => {
  const developer = mockDevelopers[0];

  return (
    <>
      <HeroPage
        nameDeveloper={developer.nameDeveloper}
        photo={developer.photo}
      />
      <PhoneBlock />
    </>
  )
}

export default DeveloperPage;
