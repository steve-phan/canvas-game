import { useEffect, useRef, useState } from 'react';
import { CANVAS_HEIGHT } from './canvas.config';
import { CanvasSt } from './Canvas.styles';
import { drawObject, generateRandomPosition, IObjectBody } from './utils';

export interface ICanvasBoard {
  height?: number;
  width?: number;
}

export const CanvasBoard = ({
  height = CANVAS_HEIGHT,
  width = CANVAS_HEIGHT,
}: ICanvasBoard) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [targetPos, setTargetPos] = useState<IObjectBody>(
    generateRandomPosition(width - 20, height - 20)
  );

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext('2d')); //
    drawObject(context, [targetPos], 'deepink'); //Draws target randomly
  }, [context]);

  return <CanvasSt ref={canvasRef} height={height} width={width} />;
};
