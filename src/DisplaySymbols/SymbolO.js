import styled from "styled-components";

export default function SymbolO() {
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

  return (
    <>
      <Circle></Circle>
    </>
  );
}
