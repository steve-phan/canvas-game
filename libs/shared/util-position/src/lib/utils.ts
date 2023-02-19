import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@canvas-games/canvas';

export const clearBoard = (
  context: CanvasRenderingContext2D | null,
  width = CANVAS_WIDTH,
  height = CANVAS_HEIGHT
): void => {
  if (!context) return;
  context.clearRect(0, 0, width, height);
};

export interface IObjectBody {
  x: number;
  y: number;
}

export const drawObject = (
  context: CanvasRenderingContext2D | null,
  objectBody: IObjectBody[],
  fillColor: string,
  strokeStyle = 'black'
) => {
  if (!context) {
    return;
  }

  context.fillStyle = fillColor;
  context.strokeStyle = strokeStyle;

  for (const { x, y } of objectBody) {
    context.fillRect(x, y, 20, 20);
    context.strokeRect(x, y, 20, 20);
  }
};

const generateRandomNumber = (min: number, max: number) => {
  // Generate a random number between 0 and max
  const random = Math.random() * max;
  // Round the random number down to the nearest multiple of 20
  return Math.floor(random / 20) * 20;
};

export const generateRandomPosition = (width: number, height: number) => {
  // Define a function to generate a random number between min and max

  // Generate random x and y coordinates in multiples of 20
  const x = generateRandomNumber(0, width);
  const y = generateRandomNumber(0, height);

  // Return an object with the generated coordinates
  return { x, y };
};
