import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

const toNumber = (value) => {
  if (value === null || value === undefined || value === '') return '';
  const n = Number(String(value).replace(/[^\d.]/g, ''));
  return Number.isNaN(n) ? '' : n;
};

export const fetchCars = createAsyncThunk(
  'cars/fetchData',
  async (params = {}, thunkAPI) => {
    try {
      const { page = 1, ...filters } = params;

      const urlParams = new URLSearchParams();
      urlParams.append('page', page);

      if (filters.brand) urlParams.append('brand', filters.brand);

      const priceNum = toNumber(filters.price);
      if (priceNum !== '') urlParams.append('rentalPrice', priceNum);

      const minMileage = toNumber(filters.mileageFrom);
      if (minMileage !== '') urlParams.append('minMileage', minMileage);

      const maxMileage = toNumber(filters.mileageTo);
      if (maxMileage !== '') urlParams.append('maxMileage', maxMileage);

      const { data } = await axios.get(`/cars?${urlParams.toString()}`);

      if (Array.isArray(data)) {
        return {
          cars: data,
          totalCars: data.length,
          page,
          totalPages: data.length ? page + 1 : page,
        };
      }

      return data;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
