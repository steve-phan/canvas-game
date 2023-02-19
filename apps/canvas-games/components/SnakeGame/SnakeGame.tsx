import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { CanvasBoard } from '@canvas-games/canvas';
import {
  drawObject,
  generateRandomPosition,
  IObjectBody,
} from '@canvas-games/shared/util-position';

import { useAppSelector } from '../../store/hooks';

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
  const [targetPos, setTargetPos] = useState<IObjectBody>(
    generateRandomPosition(width - 20, height - 20)
  );

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext('2d')); //
    drawObject(context, [targetPos], 'deepink'); //Draws target randomly
    drawObject(context, snake, 'red'); // Draws initial snake
  }, [context]);

  return (
    <StyledSnakeGame>
      <h1>Welcome to SnakeGame!</h1>
      <CanvasBoard ref={canvasRef} width={width} height={height} />
    </StyledSnakeGame>
  );
};

export default SnakeGame;
