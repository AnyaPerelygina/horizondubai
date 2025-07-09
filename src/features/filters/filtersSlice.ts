import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  dealType: string;
  propertyType: string;
  priceFrom: string;
  priceTo: string;
  location: string;
  sortingType: string;
}

const initialState: FiltersState = {
  dealType: 'Купить',
  propertyType: 'Любая недвижимость',
  priceFrom: '',
  priceTo: '',
  location: '',
  sortingType: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
