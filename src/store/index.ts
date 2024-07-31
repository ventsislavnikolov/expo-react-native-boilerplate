import applicationApi from 'store/services/applicationApi';
import applicationReducer from 'store/reducers/applicationSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(applicationApi.middleware),
  reducer: {
    application: applicationReducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
