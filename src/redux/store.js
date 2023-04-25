import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { followReducer } from './followingSlice';
import { usersReducer } from './usersSlice';

const persistConfig = {
  key: 'usersStore',
  storage,
};

const persistedFollowing = persistReducer(persistConfig, followReducer);

export const store = configureStore({
  reducer: {
    users: usersReducer,
    following: persistedFollowing,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: true,
});

export const persistor = persistStore(store);
