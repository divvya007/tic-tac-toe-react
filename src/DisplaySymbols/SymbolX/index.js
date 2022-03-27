import styled, { css } from "styled-components";

const commonStyles = css`
  position: absolute;
  top: 24.5px;
  border: 1px solid #fd5ec7;
  width: 45px;
  box-shadow: 0 0 16px #fd5ec7;
  height: 2px;
  background-color: #fd5ec7;
`;

const StyledXContainer = styled.div`
  position: relative;
  height: 55px;
  top: 19px;
`;

const StyleX = styled.div`
  ${commonStyles}
  left: 12px;
  transform: rotate(50deg);
`;

const StyleXReverse = styled.div`
  ${commonStyles}
  transform: rotate(128deg);
  left: 11px;
`;

export default function SymbolX() {
  return (
    <>
      <StyledXContainer data-testid="styledXContainer">
        <StyleX data-testid="styleX"></StyleX>
        <StyleXReverse data-testid="styleXReverse"></StyleXReverse>
      </StyledXContainer>
    </>
  );
}
