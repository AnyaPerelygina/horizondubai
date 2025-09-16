import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mockProperties from '@data/properties';
import HeroPage from '@components/hero-page/hero-page';
import PhoneBlock from '@components/phone-block/phone-block';

export default function PropertiesPage() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<typeof mockProperties[0] | null>(null);

  useEffect(() => {
    const dev = mockProperties.find(d => d.propertyKey === id) || null;
    setProperty(dev);
  }, [id]);

  if (!property) return <p>Застройщик не найден</p>;

  return (
    <>
      <HeroPage
        title={property.nameComplex}
        photo={property.imgWebp}
        pageType={'property'} />
      <PhoneBlock />
    </>
  );
}
