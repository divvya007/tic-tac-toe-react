import styled from "styled-components";

const Circle = styled.div`
  margin-top: 21px;
  margin-left: 10px;
  border: 3px solid #28dcf3;
  height: 45px;
  width: 45px;
  border-radius: 25px;
  box-shadow: 0 0 16px #28dcf3;
  background-color: transparent;
`;

export default function SymbolO() {
  return <Circle data-testid="circle" />;
}
