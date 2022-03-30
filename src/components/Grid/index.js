import Tile from "../Tile/index.js";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { resetButton } from "../../store/gameReducer.js";
import LineThrough from "./../LineThrough/index.js";
import SymbolX from "./../../DisplaySymbols/SymbolX/index.js";
import SymbolO from "../../DisplaySymbols/SymbolO/index.js";
import { useRef } from "react";
import audioSound from "./../../audioSound/winningSound.mp3";
import audioSound1 from "./../../audioSound/loseGameOver.mp3";
import audioSound2 from "./../../audioSound/reset.mp3";

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
  margin-top: 14px;
  display: flex;
  flex-direction: row;
`;

const NextMoveTextBox = styled.div`
  margin: auto;
  padding: 6px;
  font-style: italic;
  font-size: larger;
`;

const TicTacToeBoxContainer = styled.div`
  max-width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 3px;
  color: white;
  border-radius: 20px;
  color: black;
  font-weight: bolder;
  z-index: 50;

  display: ${(props) =>
    props.gameState === "won"
      ? "block"
      : props.gameState === "draw"
      ? "block"
      : "none"};
`;

const WinningPlayerContainer = styled.div`
  border-radius: 16px;
  animation: ${pulsingAnimation} 0.8s linear 1s infinite;
  position: absolute;
  background-color: black;
  text-align: center;
  color: #aea4c3f5;
  font-weight: 700;
  width: 187px;
  padding: 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: ${(props) =>
    props.gameState === "won"
      ? "block"
      : props.gameState === "draw"
      ? "block"
      : "none"};

  box-shadow: ${(props) =>
    props.nextMove === "X"
      ? "0 0 16px #28dcf3"
      : props.nextMove === "O"
      ? "0 0 16px #fd5ec7"
      : "0 0 16px #cddc39"};

  border: ${(props) =>
    props.nextMove === "X"
      ? "4px solid #28dcf3"
      : props.nextMove === "O"
      ? "4px solid #fd5ec7"
      : "4px solid #3f51b5"};
`;

const StyledSymbolCommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WinsTextContainer = styled.div`
  width: 80px;
  font-size: large;
`;

export function Grid() {
  const dispatch = useDispatch();
  const audioRef = useRef();
  const audioRefGameDraw = useRef();
  const audioRefGameReset = useRef();

  function handlePlayWinSound() {
    audioRef.current.play();
  }

  function handlePlayLoseSound() {
    audioRefGameDraw.current.play();
  }

  function handlePlayGameResetSound() {
    audioRefGameReset.current.play();
  }

  const gameState = useSelector((state) => state.grid.gameState);
  const nextMove = useSelector((state) => state.grid.nextMove);
  const strikeType = useSelector((state) => state.grid.strikeType);

  function isGameOver(gameState, nextMove) {
    if (gameState === "won" && nextMove === "X") {
      handlePlayWinSound();
      return (
        <StyledSymbolCommonContainer>
          <SymbolO />
          <WinsTextContainer data-testid="winBox">Wins</WinsTextContainer>
          <ResetGameButton
            gameState={gameState}
            nextMove={nextMove}
            data-testid="resetButton"
            onClick={() => {
              handlePlayGameResetSound();
              dispatch(resetButton());
            }}
          >
            RESET GAME
          </ResetGameButton>
        </StyledSymbolCommonContainer>
      );
    }
    if (gameState === "won" && nextMove === "O") {
      handlePlayWinSound();
      return (
        <StyledSymbolCommonContainer>
          <SymbolX />
          <WinsTextContainer data-testid="winBox">Wins</WinsTextContainer>
          <ResetGameButton
            gameState={gameState}
            data-testid="resetButton"
            onClick={() => {
              handlePlayGameResetSound();
              dispatch(resetButton());
            }}
          >
            RESET GAME
          </ResetGameButton>
        </StyledSymbolCommonContainer>
      );
    }
    if (gameState === "draw") {
      handlePlayLoseSound();
      return (
        <StyledSymbolCommonContainer>
          <div data-testid="gameDraw">Game Draw</div>
          <ResetGameButton
            gameState={gameState}
            data-testid="resetButton"
            onClick={() => {
              handlePlayGameResetSound();
              dispatch(resetButton());
            }}
          >
            RESET GAME
          </ResetGameButton>
        </StyledSymbolCommonContainer>
      );
    }
  }

  return (
    <>
      <TicTacToeBoxContainer>
        <audio type="audio/mp3" ref={audioRef} src={audioSound}></audio>
        <audio
          type="audio/mp3"
          ref={audioRefGameDraw}
          src={audioSound1}
        ></audio>
        <audio
          type="audio/mp3"
          ref={audioRefGameReset}
          src={audioSound2}
        ></audio>
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

        <WinningPlayerContainer
          gameState={gameState}
          nextMove={nextMove}
          data-testid="winningPlayer"
        >
          {isGameOver(gameState, nextMove)}
        </WinningPlayerContainer>

        <NextMoveContainer data-testid="nextMoveContainer">
          <NextMoveTextBox>Next move:</NextMoveTextBox>
          {nextMove === "X" ? <SymbolX /> : nextMove === "O" ? <SymbolO /> : ""}
        </NextMoveContainer>
      </TicTacToeBoxContainer>
    </>
  );
}
