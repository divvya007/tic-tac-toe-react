import styled from "styled-components";
import { useDispatch } from "react-redux";
import { playerMove } from "./Slice";
const TileContainer = styled.div`
  border: 2px solid pink;
  width: 70px;
  height: 90px;
  color: red;
`;
export default function Tile({ row, column }) {
  const dispatch = useDispatch();

  return (
    <>
      <TileContainer
        onClick={() => dispatch(playerMove({ row, column }))}
      ></TileContainer>
    </>
  );
}
