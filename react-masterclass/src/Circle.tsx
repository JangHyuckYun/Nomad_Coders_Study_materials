import styled, {css} from "styled-components";
import {useState} from "react";

interface ContainerProps {
    bgColor: string;
}

// styled component에 타입을 지정하는 방법
const Container = styled.div<ContainerProps>`
  ${({ bgColor }) => css`
    
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: ${bgColor};
    
  `}
`;

interface CircleProps {
    bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
    // useState에 타입 지정 하는 방법
    const [value, setValue] = useState<string | number>("");

    let t = value;
    setValue("asf");


    return <Container bgColor={bgColor} />;
}

export default Circle;