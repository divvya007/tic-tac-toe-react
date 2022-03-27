import styled from "styled-components";

const Circle = styled.div`
  position: absolute;
  border: 4px solid #28dcf3;
  height: 36px;
  width: 36px;
  border-radius: 25px;
  box-shadow: 0 0 16px #28dcf3;
  background-color: transparent;
`;

const CircleContainer = styled.div`
  position: relative;
  height: 44px;
  width: 44px;
`;

export default function SymbolO() {
  return (
    <CircleContainer data-testid="circleContainer">
      <Circle data-testid="circle" />
    </CircleContainer>
  );
}
