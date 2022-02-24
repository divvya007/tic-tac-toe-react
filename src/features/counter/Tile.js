import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove } from "./Slice";
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

  return (
    <>
      <TileContainer
        onClick={() =>
          value !== null ? "" : dispatch(playerMove({ row, column }))
        }
      >
        {value}
      </TileContainer>
    </>
  );
}
