import Tile from "./Tile";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 250px;
  align-content: center;
`;
const NextMoveContainer = styled.div`
  text-align: center;
`;
export function Grid() {
  const move = useSelector((state) => state.grid.nextMove);

  return (
    <>
      <div>
        <Container>
          <Tile row={0} column={0} />
          <Tile row={0} column={1} />
          <Tile row={0} column={2} />
          <Tile row={1} column={0} />
          <Tile row={1} column={1} />
          <Tile row={1} column={2} />
          <Tile row={2} column={0} />
          <Tile row={2} column={1} />
          <Tile row={2} column={2} />
        </Container>
        <NextMoveContainer>your next move is: {move}</NextMoveContainer>
      </div>
    </>
  );
}
