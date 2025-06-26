import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from '../features/filters/filtersSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    counter: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
