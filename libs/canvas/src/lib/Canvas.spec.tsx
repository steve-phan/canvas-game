import { render } from '@testing-library/react';

import { CanvasBoard } from './Canvas';

describe('Canvas', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CanvasBoard />);
    expect(baseElement).toBeTruthy();
  });
});
