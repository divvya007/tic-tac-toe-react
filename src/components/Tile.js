import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove } from "./../store/gameReducer.js";
import { useSelector } from "react-redux";
import SymbolO from "../DisplaySymbols/SymbolO";
import SymbolX from "../DisplaySymbols/SymbolX";

const TileContainer = styled.div`
  border: 2px solid #497ca9;
  width: 70px;
  height: 90px;
  color: aliceblue;
`;
export default function Tile({ row, column }) {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.grid.gridFrame[row][column]);
  console.log(value);
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
      <TileContainer
        onClick={() =>
          value !== null || gameState === "won"
            ? ""
            : dispatch(playerMove({ row, column }))
        }
      >
        {handleDisplaySymbols(value)}
      </TileContainer>
    </>
  );
}
