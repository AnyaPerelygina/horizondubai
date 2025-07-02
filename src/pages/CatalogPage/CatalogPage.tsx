import { FC } from 'react';

import CatalogBanner from '@components/catalog-banner/catalog-banner';
import CatalogBlock from '@components/catalog-block/catalog-block';

const CatalogPage: FC = () => {
  return (
    <>
      <CatalogBlock />
      <CatalogBanner />
    </>
  )
}

export default CatalogPage;
