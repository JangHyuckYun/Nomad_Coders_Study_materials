import styled, {keyframes} from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }

  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }

  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Title = styled.h1`
${({theme}) => css`
  color: ${theme.textColor}
`}
`;

const Wrapper = styled.div`
  display: flex;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1.5s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${Emoji} {
    transition: .3s ;

    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
    return (
        <Wrapper>
            <Box>
                <Emoji>:smile:</Emoji>
            </Box>
        </Wrapper>
    );
}

export default App;
