import Tile from "../Tile/index.js";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { resetButton } from "../../store/gameReducer.js";
import LineThrough from "./../LineThrough/index.js";

const pulsingAnimation = keyframes`
0% { box-shadow:0 0 8px #ea4c89, inset 0 0 8px #ea4c89; }
50% { box-shadow:0 0 16px #ea4c89, inset 0 0 14px #ea4c89; }
100% { box-shadow:0 0 8px #ea4c89, inset 0 0 8px #ea4c89; }
`;
const FancyButton = keyframes`
0% {
    background: linear-gradient(
      115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b
    );
  }

  20% {
    background: linear-gradient(
      115deg,#fad648,#a767e5,#12bcfe,#44ce7b,#4fcf70
    );
  }
  
  40% {
    background: linear-gradient(
      115deg,#a767e5,#12bcfe,#44ce7b,#4fcf70, #fad648
    );
  }

  60% {
    background: linear-gradient(
      115deg,#12bcfe,#44ce7b,#4fcf70, #fad648,#a767e5
    );
  }

  80% {
    background: linear-gradient(
      115deg,#44ce7b,#4fcf70, #fad648,#a767e5,#12bcfe
    );
  }

  100% {
    background: linear-gradient(
      115deg,#4fcf70, #fad648,#a767e5,#12bcfe, #44ce7b
    );
  }
`;

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
  height: 52px;
  width: 160px;
  background: linear-gradient(
    115deg,
    #4fcf70,
    #fad648,
    #a767e5,
    #12bcfe,
    #44ce7b
  );
  background-image: linear-gradient(
    115deg,
    rgb(79, 207, 112),
    rgb(250, 214, 72),
    rgb(167, 103, 229),
    rgb(18, 188, 254),
    rgb(68, 206, 123)
  );

  animation: ${pulsingAnimation} 0.6s linear 1s infinite;
  border-radius: 50px;
  animation: 0.75s linear infinite;
  animation-duration: 0.75s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: ${FancyButton};

  cursor: pointer;
  margin-top: 10px;
  margin-left: 45px;
  color: white;
  border-radius: 5px;
  color: black;
  font-weight: bolder;

  display: ${(props) =>
    props.gameState === "won"
      ? "block"
      : props.gameState === "draw"
      ? "block"
      : "none"};
`;

const WinningPlayerContainer = styled.div`
  border-radius: 16px;
  border: 2px solid #5679bd;
  box-shadow: 0 0 16px #c864ef;
  animation: ${pulsingAnimation} 0.8s linear 1s infinite;
  position: absolute;
  background-color: black;
  text-align: center;
  color: #aea4c3f5;
  font-weight: 700;
  width: 176px;
  padding: 98px;
  margin-top: -352px;
  margin-left: -62px;
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
