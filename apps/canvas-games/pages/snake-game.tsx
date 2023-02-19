import React from 'react';

import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@canvas-games/canvas';

import SnakeGame from '../components/SnakeGame/SnakeGame';

const SnakeGamePage = () => {
  return <SnakeGame width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />;
};

export default SnakeGamePage;
