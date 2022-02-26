// TODO: Move this file to "src/components/Grid.js"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { resetButton } from "./Slice";
import Tile from "./Tile";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 250px;
  align-content: center;
`;

const NextMoveContainer = styled.div`
  text-align: center;
`;

const TicTacToeBoxContainer = styled.div`
  max-width: 250px;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
`;

export function Grid() {
  const [isReset, setReset] = useState(false);

  const dispatch = useDispatch();
  const winningPlayer = useSelector((state) => state.grid.playerName);
  console.log(winningPlayer);
  const win = useSelector((state) => state.grid.winner);
  const move = useSelector((state) => state.grid.nextMove);

  return (
    <>
      <TicTacToeBoxContainer>
        <Container>
          <Tile row={0} column={0} isButtonReset={isReset} />
          <Tile row={0} column={1} isButtonReset={isReset} />
          <Tile row={0} column={2} isButtonReset={isReset} />
          <Tile row={1} column={0} isButtonReset={isReset} />
          <Tile row={1} column={1} isButtonReset={isReset} />
          <Tile row={1} column={2} isButtonReset={isReset} />
          <Tile row={2} column={0} isButtonReset={isReset} />
          <Tile row={2} column={1} isButtonReset={isReset} />
          <Tile row={2} column={2} isButtonReset={isReset} />
        </Container>
        <NextMoveContainer>your next move is: {move}</NextMoveContainer>
        <button
          onClick={() => {
            dispatch(resetButton());
            setReset(!isReset);
          }}
        >
          RESET GAME
        </button>

        <div>player wins: {win === true ? winningPlayer : ""} </div>
      </TicTacToeBoxContainer>
    </>
  );
}
