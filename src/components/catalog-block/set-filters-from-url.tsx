import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilters } from '@features/filters/filtersSlice';

const SetFiltersFromUrl = ({ onReady }: { onReady: () => void }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const dealType = searchParams.get('dealType');
    const propertyType = searchParams.get('propertyType');

    dispatch(setFilters({
      dealType: dealType || '',
      propertyType: propertyType || ''
    }));

    onReady();
  }, [searchParams, dispatch, onReady]);

  return null;
};

export default SetFiltersFromUrl;
