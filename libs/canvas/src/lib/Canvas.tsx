import { forwardRef } from 'react';

import { CANVAS_HEIGHT } from './canvas.config';
import { CanvasSt } from './Canvas.styles';

export interface ICanvasBoard {
  height?: number;
  width?: number;
}

export const CanvasBoard = forwardRef<HTMLCanvasElement, ICanvasBoard>(
  ({ height = CANVAS_HEIGHT, width = CANVAS_HEIGHT }, ref) => {
    return <CanvasSt ref={ref} height={height} width={width} />;
  }
);
