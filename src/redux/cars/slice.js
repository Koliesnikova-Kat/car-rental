import {
  // createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { fetchCars } from './operations';
// import { selectCars } from './selectors';
// import { selectAllFilters } from '../filters/selectors';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  totalCars: 0,
  page: 1,
  totalPages: 1,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || 'Error fetching cars';
};

const carsSlice = createSlice({
  name: 'cars',

  initialState,

  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
      state.totalCars = 0;
      state.totalPages = 1;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { cars, totalCars, page, totalPages } = action.payload;

        if (page && page > 1) {
          state.items = [...state.items, ...cars];
        } else {
          state.items = cars;
        }

        state.totalCars = totalCars;
        state.page = page;
        state.totalPages = totalPages;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

// export const selectFilteredCars = createSelector(
//   [selectCars, selectAllFilters],
//   (cars, filters) => {
//     return cars.filter(
//       (car) =>
//         (!filters.brand ||
//           car.make?.toLowerCase().includes(filters.brand.toLowerCase())) &&
//         (!filters.price || car.price <= Number(filters.price)) &&
//         (!filters.mileageFrom || car.mileage >= Number(filters.mileageFrom)) &&
//         (!filters.mileageTo || car.mileage <= Number(filters.mileageTo))
//     );
//   }
// );

export const { resetCars } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
