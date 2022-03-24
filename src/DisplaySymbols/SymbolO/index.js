import styled from "styled-components";

const Circle = styled.div`
  position: absolute;
  border: 3px solid #28dcf3;
  height: 46px;
  width: 46px;
  border-radius: 25px;
  box-shadow: 0 0 16px #28dcf3;
  background-color: transparent;
`;

const CircleContainer = styled.div`
  position: relative;
  position: relative;
  height: 53px;
  width: 53px;
  top: 19px;
  left: 6px;
`;

export default function SymbolO() {
  return (
    <CircleContainer>
      <Circle data-testid="circle" />
    </CircleContainer>
  );
}
