import Tile from "./Tile";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { resetButton } from "./../store/gameReducer.js";
import LineThrough from "./LineThrough";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 250px;
  align-content: center;
`;
const NextMoveContainer = styled.div`
  text-align: center;
  margin-top: 14px;
`;
const TicTacToeBoxContainer = styled.div`
  max-width: 250px;
  margin-left: 42%;

  margin-top: 5%;
`;

const ResetGameButton = styled.button`
  background-color: #00bcd4bf;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 60px;
`;

const WinningPlayerContainer = styled.div`
  margin-top: 14px;
  margin-left: 30px;
`;

export function Grid() {
  const dispatch = useDispatch();

  const gameState = useSelector((state) => state.grid.gameState);
  const nextMove = useSelector((state) => state.grid.nextMove);
  const strikeType = useSelector((state) => state.grid.strikeType);

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
        <LineThrough strikeType={strikeType}></LineThrough>
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
        <ResetGameButton
          onClick={() => {
            dispatch(resetButton());
          }}
        >
          RESET GAME
        </ResetGameButton>

        <WinningPlayerContainer data-testid="winning-player">
          player wins:
          {isGameOver(gameState, nextMove)}
        </WinningPlayerContainer>
      </TicTacToeBoxContainer>
    </>
  );
}
