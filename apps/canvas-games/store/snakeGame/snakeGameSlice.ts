import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState, AppThunk } from '../store';

// type Values<T> =

export const snakeDirections = {
  UP: 'UP',
  DOWN: 'DOWN',
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
} as const;

type Direction = keyof typeof snakeDirections;
interface ISnakeCoord {
  x: number;
  y: number;
}

export interface IGlobalState {
  snake: ISnakeCoord[] | [];
  direction: Direction;
}

const initialState: IGlobalState = {
  //Postion of the entire snake
  snake: [
    { x: 580, y: 300 },
    { x: 560, y: 300 },
    { x: 540, y: 300 },
    { x: 520, y: 300 },
    { x: 500, y: 300 },
  ],
  direction: 'RIGHT',
};

export const snakeGameSlice = createSlice({
  name: 'snakeGame',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDirection: (state, action: PayloadAction<Direction>) => {
      state.direction = action.payload;
    },
    moveSnake: (state) => {
      const { snake, direction } = state;
      const newSnake = [...snake];
      let newHead: ISnakeCoord;

      switch (direction) {
        case snakeDirections.UP:
          newHead = { x: newSnake[0].x, y: newSnake[0].y - 20 };
          break;
        case snakeDirections.DOWN:
          newHead = { x: newSnake[0].x, y: newSnake[0].y + 20 };
          break;
        case snakeDirections.LEFT:
          newHead = { x: newSnake[0].x - 20, y: newSnake[0].y };
          break;
        case snakeDirections.RIGHT:
          newHead = { x: newSnake[0].x + 20, y: newSnake[0].y };
          break;
        default:
          return;
      }

      newSnake.pop();
      newSnake.unshift(newHead);
      state.snake = newSnake;
    },
    increment: (state, actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.snake = actions.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { increment, setDirection, moveSnake } = snakeGameSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export default snakeGameSlice.reducer;
