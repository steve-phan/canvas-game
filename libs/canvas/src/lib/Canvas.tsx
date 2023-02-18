import { CanvasSt } from './Canvas.styles';

export interface ICanvasBoard {
  height?: number;
  width?: number;
}

export const CanvasBoard = ({ height = 720, width = 1280 }: ICanvasBoard) => {
  return <CanvasSt height={height} width={width} />;
};
