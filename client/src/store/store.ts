import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { test1api } from './services/test1api';

export const store = configureStore({
	reducer: {
		[test1api.reducerPath]: test1api.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(test1api.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
