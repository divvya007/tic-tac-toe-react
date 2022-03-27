import styled, { css } from "styled-components";

const commonStyles = css`
  position: absolute;
  top: 18px;
  border: 2px solid #fd5ec7;
  width: 36px;
  box-shadow: 0 0 16px #fd5ec7;
  background-color: #fd5ec7;
`;

const StyledXContainer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  text-align: center;
`;

const StyleX = styled.div`
  ${commonStyles}
  transform: rotate(45deg);
`;

const StyleXReverse = styled.div`
  ${commonStyles}
  transform: rotate(135deg);
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
