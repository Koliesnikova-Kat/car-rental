import { createSlice } from '@reduxjs/toolkit';

const normalize = (state) => {
  const raw = Array.isArray(state)
    ? state
    : state && Array.isArray(state.items)
    ? state.items
    : [];
  return raw.map(String);
};

const toId = (v) => String(v);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite(state, { payload }) {
      const list = normalize(state);
      const id = toId(payload);
      if (list.includes(id)) return list;
      return [...list, id];
    },
    removeFavorite(state, { payload }) {
      const list = normalize(state);
      const id = toId(payload);
      return list.filter((x) => x !== id);
    },
    toggleFavorite(state, { payload }) {
      const list = normalize(state);
      const id = toId(payload);
      return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
    },
    resetFavorites() {
      return [];
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
