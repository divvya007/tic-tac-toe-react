import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove } from "./../../store/gameReducer.js";
import { useSelector } from "react-redux";
import SymbolO from "./../../DisplaySymbols/SymbolO/index.js";
import SymbolX from "./../../DisplaySymbols/SymbolX/index.js";
import audioSound from "./../../audioSound/playerMove.mp3";
import { useRef } from "react";

const TileContainer = styled.div`
  border: 2px solid #fbd357;
  width: 75px;
  height: 90px;
  color: #fbd357;
  box-shadow: 0 0 25px #fbd357;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Tile({ row, column }) {
  const dispatch = useDispatch();
  const audioRef = useRef();

  const handleAudioPlay = () => {
    audioRef.current.play();
  };

  function handleDispatch() {
    if (value !== null || gameState === "won") {
      return "";
    }
    handleAudioPlay();
    return dispatch(playerMove({ row, column }));
  }

  const value = useSelector((state) => state.grid.gridFrame[row][column]);
  const gameState = useSelector((state) => state.grid.gameState);
  function handleDisplaySymbols() {
    if (value === "X") {
      return <SymbolX />;
    }
    if (value === "O") {
      return <SymbolO />;
    }
  }

  return (
    <>
      <audio type="audio/mp3" ref={audioRef} src={audioSound}></audio>
      <TileContainer
        data-testid={`tile-${row}-${column}`}
        onClick={handleDispatch}
      >
        {handleDisplaySymbols(value)}
      </TileContainer>
    </>
  );
}
