import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mockDevelopers from '@data/developers';
import HeroPage from '@components/hero-page/hero-page';
import Subnav from '@components/subnav/subnav';
import PhoneBlock from '@components/phone-block/phone-block';

export default function DeveloperPage() {
    const navLinks = [
    {
      href: '#',
      label: 'Параметры',
    },
    {
      href: '#',
      label: 'Описание',
    },
    {
      href: '#',
      label: 'Застройщики',
    },
    {
      href: '/catalog?propertyType=Виллы',
      label: 'Виллы',
    },
    {
      href: '#',
      label: 'Документы',
    },
    {
      href: '#',
      label: 'Карта',
    }
  ]

  const { id } = useParams<{ id: string }>();
  const [developer, setDeveloper] = useState<typeof mockDevelopers[0] | null>(null);

  useEffect(() => {
    const dev = mockDevelopers.find(d => d.developerKey === id) || null;
    setDeveloper(dev);
  }, [id]);

  if (!developer) return <p>Застройщик не найден</p>;

  return (
    <>
      <HeroPage
        title={developer.nameDeveloper}
        photo={developer.photo}
        pageType={'developer'} />
      <Subnav navLinks={navLinks} />
      <PhoneBlock />
    </>
  );
}
