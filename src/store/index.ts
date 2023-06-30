import { configureStore } from '@reduxjs/toolkit';

import applicationApi from 'store/services/applicationApi';
import applicationReducer from 'store/reducers/applicationSlice';

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(applicationApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
