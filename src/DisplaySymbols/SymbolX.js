import styled from "styled-components";

const StyleX = styled.div`
  margin-left: 12px;
  margin-top: 45px;
  position: absolute;
  border: 1px solid #e0339b;
  transform: rotate(50deg);
  width: 45px;
`;

const StyleXReverse = styled.div`
  margin-left: 12px;
  margin-top: 45px;
  position: absolute;
  border: 1px solid #e0339b;
  transform: rotate(128deg);
  width: 45px;
`;

export default function SymbolX() {
  return (
    <>
      <StyleX></StyleX>
      <StyleXReverse></StyleXReverse>
    </>
  );
}
