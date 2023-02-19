import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@canvas-games/canvas';
import { clearBoard, drawObject, generateRandomPosition } from './utils';

describe('clearBoard', () => {
  test('should clear the canvas', () => {
    const clearRectMock = jest.fn();
    const context = {
      clearRect: clearRectMock,
    } as unknown as CanvasRenderingContext2D;

    clearBoard(context);

    expect(clearRectMock).toHaveBeenCalledWith(
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
  });

  test('should not clear the canvas if context is null', () => {
    const clearRectMock = jest.fn();
    const context = null;

    clearBoard(context);

    expect(clearRectMock).not.toHaveBeenCalled();
  });
});

describe('drawObject', () => {
  const fillColor = 'blue';
  const strokeStyle = 'red';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not draw anything if context is null', () => {
    const contextMock = null;
    const objectBody = [{ x: 0, y: 0 }];

    const result = drawObject(contextMock, objectBody, fillColor, strokeStyle);

    expect(result).toBe(undefined);
  });

  it('should draw all objects with the given fill and stroke styles', () => {
    const contextMock = {
      fillRect: jest.fn(),
      strokeRect: jest.fn(),
    } as unknown as CanvasRenderingContext2D;
    const objectBody = [
      { x: 10, y: 20 },
      { x: 30, y: 40 },
    ];

    drawObject(contextMock, objectBody, fillColor, strokeStyle);

    expect(contextMock.fillStyle).toBe(fillColor);
    expect(contextMock.strokeStyle).toBe(strokeStyle);
    expect(contextMock.fillRect).toHaveBeenCalledTimes(objectBody.length);
    expect(contextMock.strokeRect).toHaveBeenCalledTimes(objectBody.length);

    objectBody.forEach((object) => {
      expect(contextMock.fillRect).toHaveBeenCalledWith(
        object.x,
        object.y,
        20,
        20
      );
      expect(contextMock.strokeRect).toHaveBeenCalledWith(
        object.x,
        object.y,
        20,
        20
      );
    });
  });
});

describe('generateRandomPosition', () => {
  it('should return an object with x and y properties', () => {
    const result = generateRandomPosition(100, 100);
    expect(result).toHaveProperty('x');
    expect(result).toHaveProperty('y');
  });

  it('should return x and y coordinates that are multiples of 20', () => {
    const result = generateRandomPosition(100, 100);
    expect(result.x % 20).toBe(0);
    expect(result.y % 20).toBe(0);
  });

  it('should return x and y coordinates that are less than the width and height parameters', () => {
    const width = 200;
    const height = 300;
    const result = generateRandomPosition(width, height);
    expect(result.x).toBeLessThan(width);
    expect(result.y).toBeLessThan(height);
  });
});
