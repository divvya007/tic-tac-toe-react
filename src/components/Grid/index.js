import Tile from "../Tile/index.js";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { resetButton } from "../../store/gameReducer.js";
import LineThrough from "./../LineThrough/index.js";

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
  height: 67px;
  width: 145px;
  background-color: #00bcd4bf;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 60px;
  display: ${(props) =>
    props.gameState === "won"
      ? "block"
      : props.gameState === "draw"
      ? "block"
      : "none"};
`;

const WinningPlayerContainer = styled.div`
  position: absolute;
  background-color: black;
  text-align: center;
  color: white;
  width: 190px;
  height: 190px;
  margin-top: -350px;
  margin-left: 30px;
  z-index: 10;
  display: ${(props) =>
    props.gameState === "won"
      ? "block"
      : props.gameState === "draw"
      ? "block"
      : "none"};
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
        <Container data-testid="tileContainer">
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
        <NextMoveContainer data-testid="nextMoveContainer">
          your next move is: {nextMove}
        </NextMoveContainer>
        <ResetGameButton
          gameState={gameState}
          data-testid="resetButton"
          onClick={() => {
            dispatch(resetButton());
          }}
        >
          RESET GAME
        </ResetGameButton>

        <WinningPlayerContainer
          gameState={gameState}
          data-testid="winningPlayer"
        >
          player wins:
          {isGameOver(gameState, nextMove)}
        </WinningPlayerContainer>
      </TicTacToeBoxContainer>
    </>
  );
}
