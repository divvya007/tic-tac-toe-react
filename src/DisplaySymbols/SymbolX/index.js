import styled, { css } from "styled-components";

const commonStyles = css`
  margin-left: 12px;
  margin-top: 45px;
  position: absolute;
  border: 1px solid #fd5ec7;
  width: 45px;
  box-shadow: 0 0 16px #fd5ec7;
  height: 2px;
  background-color: #fd5ec7;
`;

const StyleX = styled.div`
  ${commonStyles}
  transform: rotate(50deg);
`;

const StyleXReverse = styled.div`
  ${commonStyles}
  transform: rotate(128deg);
`;

export default function SymbolX() {
  return (
    <>
      <StyleX data-testid="styleX"></StyleX>
      <StyleXReverse data-testid="styleXReverse"></StyleXReverse>
    </>
  );
}
