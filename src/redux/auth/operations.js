import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const api = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('/users/signup', body);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await api.post('/users/login', body);
    setAuthHeader(data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await api.post('/users/logout');
    clearAuthHeader();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const { data } = await api.get('/users');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await api.post('/users', { email, password });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
