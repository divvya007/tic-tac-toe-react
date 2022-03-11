import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove } from "./../../store/gameReducer.js";
import { useSelector } from "react-redux";
import SymbolO from "../../DisplaySymbols/SymbolO";
import SymbolX from "../../DisplaySymbols/SymbolX";

const TileContainer = styled.div`
  border: 2px solid #fbd357;
  width: 75px;
  height: 90px;
  color: #fbd357;
  box-shadow: 0 0 10px #fbd357;
`;
export default function Tile({ row, column }) {
  const dispatch = useDispatch();

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
      <TileContainer
        data-testid={`tile-${row}-${column}`}
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
