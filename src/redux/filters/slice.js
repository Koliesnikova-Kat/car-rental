import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
};

const filterSlice = createSlice({
  name: 'filters',

  initialState,

  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setMileageFrom(state, action) {
      state.mileageFrom = action.payload;
    },
    setMileageTo(state, action) {
      state.mileageTo = action.payload;
    },
    resetFilters() {
      return initialState;
    },
    setAllFilters(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
  resetFilters,
  setAllFilters,
} = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
