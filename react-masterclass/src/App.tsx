import styled, {css, keyframes} from "styled-components";
import React, {useState} from "react";

const Container = styled.div`
  ${({ theme }) => css`
      background-color: ${theme.bgColor};
  `}
`;

const H1 = styled.h1`
  ${({ theme }) => css`
      color: ${theme.textColor}
  `}
`;

function App() {

    return (
        <Container>
            <H1>hello</H1>
        </Container>
    );
}

export default App;
