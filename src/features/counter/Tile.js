import styled from "styled-components";

export default function Tile({ num }) {
  const TileContainer = styled.div`
    border: 2px solid pink;
    width: 70px;
    height: 90px;
    color: red;
  `;
  return (
    <>
      <TileContainer
        onClick={(e) => {
          alert(e.target.tagName);
        }}
      >
        {num}
      </TileContainer>
    </>
  );
}
