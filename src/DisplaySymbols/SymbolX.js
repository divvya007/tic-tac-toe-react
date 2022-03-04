import styled from "styled-components";

const StyleX = styled.div`
  background-color: #fe1bb2;
  margin-left: 12px;
  margin-top: 45px;
  position: absolute;
  border: 1px solid white;
  transform: rotate(50deg);
  width: 45px;
`;

const StyleXReverse = styled.div`
  background-color: #fe1bb2;
  margin-left: 12px;
  margin-top: 45px;
  position: absolute;
  border: 1px solid white;
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
