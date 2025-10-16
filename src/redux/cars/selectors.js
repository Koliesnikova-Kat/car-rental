export const selectCars = (state) => state.cars.items;
export const selectTotalCars = (state) => state.cars.totalCars;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectFavorites = (state) => state.favorites;