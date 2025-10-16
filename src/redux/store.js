import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/slice';
import { filtersReducer } from './filters/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from '../redux/favorites/slice';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  version: 2,
  stateReconciler: hardSet,
  migrate: async (persistedState) => {
    const raw = Array.isArray(persistedState)
      ? persistedState
      : persistedState?.items && Array.isArray(persistedState.items)
      ? persistedState.items
      : [];
    return raw.map(String);
  },
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
