import Tile from "./Tile";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { resetButton } from "./../store/gameReducer.js";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 250px;
  align-content: center;
`;
const NextMoveContainer = styled.div`
  text-align: center;
`;
const TicTacToeBoxContainer = styled.div`
  max-width: 250px;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
`;

export function Grid() {
  const dispatch = useDispatch();

  const gameState = useSelector((state) => state.grid.gameState);
  const nextMove = useSelector((state) => state.grid.nextMove);

  function isGameOver(gameState, nextMove) {
    if (gameState === "won" && nextMove === "X") {
      return "O";
    }
    if (gameState === "won" && nextMove === "O") {
      return "X";
    }
    if (gameState === "draw") {
      return "game draw";
    }
  }

  return (
    <>
      <TicTacToeBoxContainer>
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
        <NextMoveContainer>your next move is: {nextMove}</NextMoveContainer>
        <button
          onClick={() => {
            dispatch(resetButton());
          }}
        >
          RESET GAME
        </button>

        <div>
          player wins:
          {isGameOver(gameState, nextMove)}
        </div>
      </TicTacToeBoxContainer>
    </>
  );
}
