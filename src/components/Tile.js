import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove } from "./../store/gameReducer.js";
import { useSelector } from "react-redux";

const TileContainer = styled.div`
  border: 2px solid pink;
  width: 70px;
  height: 90px;
  color: red;
`;
export default function Tile({ row, column }) {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.grid.gridFrame[row][column]);
  const win = useSelector((state) => state.grid.winner);
  const strike = useSelector((state) => state.grid.strikeType);
  const player = useSelector((state) => state.grid.playerName);

  return (
    <>
      <TileContainer
        onClick={() =>
          value !== null || win === true
            ? ""
            : dispatch(playerMove({ row, column }))
        }
      >
        {value}
      </TileContainer>
    </>
  );
}
