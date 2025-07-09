import { FC, useState } from 'react';

import SetFiltersFromUrl from '@components/catalog-block/set-filters-from-url';
import CatalogBanner from '@components/catalog-banner/catalog-banner';
import CatalogBlock from '@components/catalog-block/catalog-block';

const CatalogPage: FC = () => {
  const [filtersReady, setFiltersReady] = useState(false);

  return (
    <>
      <SetFiltersFromUrl onReady={() => setFiltersReady(true)} />
      {filtersReady && <CatalogBlock />}
      {filtersReady && <CatalogBanner />}
    </>
  )
}

export default CatalogPage;
