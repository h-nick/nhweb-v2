import React, { FC } from 'react';
import { GlobalStyle, theme } from '../../styles/global';
import styled, { ThemeProvider } from 'styled-components';
import '../../styles/normalize.css';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    0deg,
    #180625 41.06%,
    #210a34 74.21%,
    #2f0e48 90.79%,
    #3a115a 100%
  );
`;

const Index: FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeaderWrapper>
          <h1>Hello World!</h1>
        </HeaderWrapper>
      </ThemeProvider>
    </>
  );
};

export default Index;
