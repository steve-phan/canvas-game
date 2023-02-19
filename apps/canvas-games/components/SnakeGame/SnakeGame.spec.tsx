import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import SnakeGame from './SnakeGame';

describe('SnakeGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <SnakeGame width={1280} height={720} />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
