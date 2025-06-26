import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  deal: string;
  type: string;
  priceFrom: string;
  priceTo: string;
  location: string;
}

const initialState: FiltersState = {
  deal: '',
  type: '',
  priceFrom: '',
  priceTo: '',
  location: '',
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
