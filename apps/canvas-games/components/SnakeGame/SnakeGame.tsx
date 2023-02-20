import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { CanvasBoard } from '@canvas-games/canvas';
import {
  drawObject,
  generateRandomPosition,
  IObjectBody,
} from '@canvas-games/shared/util-position';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setDirection,
  snakeDirections,
} from '../../store/snakeGame/snakeGameSlice';

/* eslint-disable-next-line */
export interface SnakeGameProps {
  width: number;
  height: number;
}

const StyledSnakeGame = styled.div`
  color: pink;
`;

export const SnakeGame = ({ width, height }: SnakeGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  // Get snake position from redux
  const snake = useAppSelector((state) => state.snakeGame.snake);
  const dispatch = useAppDispatch();
  const [targetPos, setTargetPos] = useState<IObjectBody>(
    generateRandomPosition(width - 20, height - 20)
  );
  const handleKeyDown = async (event: KeyboardEvent) => {
    console.log({ event });
    switch (event.code) {
      case 'KeyW':
        dispatch(setDirection(snakeDirections.UP));
        break;
      case 'KeyS':
        dispatch(setDirection(snakeDirections.DOWN));
        break;
      case 'KeyA':
        dispatch(setDirection(snakeDirections.LEFT));
        break;
      case 'KeyD':
        dispatch(setDirection(snakeDirections.RIGHT));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    drawObject(context, [targetPos], 'deepink'); //Draws target randomly
    drawObject(context, snake, 'red'); // Draws initial snake
  }, [context]);

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext('2d'));
  }, []);
  return (
    <StyledSnakeGame>
      <h1>Welcome to SnakeGame!</h1>
      <CanvasBoard ref={canvasRef} width={width} height={height} />
    </StyledSnakeGame>
  );
};

export default SnakeGame;
