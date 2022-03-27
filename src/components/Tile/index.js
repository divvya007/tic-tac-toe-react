import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove } from "./../../store/gameReducer.js";
import { useSelector } from "react-redux";
import SymbolO from "./../../DisplaySymbols/SymbolO/index.js";
import SymbolX from "./../../DisplaySymbols/SymbolX/index.js";

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
