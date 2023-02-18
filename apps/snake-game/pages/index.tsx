import styled from 'styled-components';

import { CanvasBoard } from '@canvas-games/canvas';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <h1>Hello, Snake Game</h1>
      <CanvasBoard />
    </StyledPage>
  );
}

export default Index;
