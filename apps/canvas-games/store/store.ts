import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import snakeGameSlice from './snakeGame/snakeGameSlice';

export const store = configureStore({
  reducer: {
    snakeGame: snakeGameSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
