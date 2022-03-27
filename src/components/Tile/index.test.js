import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import Tile from ".";
import gameReducer, { initialState } from "../../store/gameReducer";
import { expect } from "@jest/globals";

function createMockStore(gridState) {
  return configureStore({
    reducer: {
      grid: gameReducer,
    },
    preloadedState: { grid: gridState },
  });
}

describe("testing the Tile component", () => {
  it("renders the Tile component", () => {
    let store = createMockStore(initialState);

    render(
      <Provider store={store}>
        <Tile row={0} column={0} />
      </Provider>
    );

    let tileEl = screen.getByTestId("tile-0-0");
    expect(tileEl.childNodes.length).toBe(0);
  });

  it("renders the Tile component and display X when present in state", () => {
    let store = createMockStore({
      ...initialState,
      gridFrame: [
        ["X", null, null],
        [null, null, null],
        [null, null, null],
      ],
    });

    render(
      <Provider store={store}>
        <Tile row={0} column={0} />
      </Provider>
    );

    let tileEl = screen.getByTestId("tile-0-0");
    expect(tileEl.childNodes.length).toBe(1);
  });

  it("renders the Tile component and display O when present in state", () => {
    let store = createMockStore({
      ...initialState,
      gridFrame: [
        ["O", null, null],
        [null, null, null],
        [null, null, null],
      ],
    });

    render(
      <Provider store={store}>
        <Tile row={0} column={0} />
      </Provider>
    );

    let tileEl = screen.getByTestId("tile-0-0");
    expect(tileEl.childNodes.length).toBe(1);
  });

  it("on click, state should be updated", () => {
    let store = createMockStore(initialState);

    render(
      <Provider store={store}>
        <Tile row={0} column={0} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("tile-0-0"));

    expect(store.getState().grid.gridFrame[0][0]).toBe("X");
  });

  it("when game is won, the tile should not update the state", () => {
    let store = createMockStore({
      ...initialState,
      gridFrame: [
        [null, null, null],
        [null, "O", "O"],
        ["X", "X", "X"],
      ],
      gameState: "won",
      nextMove: "O",
      strikeType: 3,
    });

    render(
      <Provider store={store}>
        <Tile row={0} column={0} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("tile-0-0"));

    expect(screen.getByTestId("tile-0-0").childNodes.length).toBe(0);
    expect(store.getState().grid.gridFrame[0][0]).toBe(null);
  });

  it("when a tile is populated, the click should not update it", () => {
    // given
    let store = createMockStore({
      ...initialState,
      gridFrame: [
        ["X", null, null],
        [null, "O", "O"],
        ["X", "X", null],
      ],
    });

    render(
      <Provider store={store}>
        <Tile row={0} column={0} />
      </Provider>
    );

    // when
    fireEvent.click(screen.getByTestId("tile-0-0"));

    // expect
    expect(screen.getByTestId("tile-0-0").childNodes.length).toBe(1);
    expect(store.getState().grid.gridFrame[0][0]).toBe("X");
  });
});
