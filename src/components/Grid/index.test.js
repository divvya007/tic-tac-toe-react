import { render, screen, fireEvent, getNodeText } from "@testing-library/react";
import react from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { Grid } from ".";
import gameReducer, {
  initialState,
  resetButton,
} from "../../store/gameReducer";
import { expect } from "@jest/globals";

function createMockStore(gridState) {
  return configureStore({
    reducer: {
      grid: gameReducer,
    },
    preloadedState: { grid: gridState },
  });
}

describe("testing the grid component", () => {
  it("should render the grid component", () => {
    let store = configureStore({
      reducer: {
        grid: gameReducer,
      },
      preloadedState: { grid: initialState },
    });
    render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );

    let tileContainer = screen.getByTestId("tileContainer");
    expect(tileContainer.childNodes.length).toBe(9);
    // if it contains text in the nextMoveContainer
    let nextMoveContainer = screen.getByTestId("nextMoveContainer");
    expect(getNodeText(nextMoveContainer)).toBe("your next move is: X");

    // contains reset button with reset game text
    let resetGameButton = screen.getByTestId("resetButton");
    expect(getNodeText(resetGameButton)).toBe("RESET GAME");
  });

  it("should mock a function", () => {
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
        <Grid />
      </Provider>
    );
    expect(store.getState().grid.strikeType).toBe(3);
  });
  it("should mock a function", () => {
    let store = createMockStore({
      ...initialState,
      gridFrame: [
        [null, null, "X"],
        [null, "X", "X"],
        ["O", "O", "O"],
      ],
      gameState: "won",
      nextMove: "X",
      strikeType: 3,
    });

    render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );
    expect(store.getState().grid.gameState).toBe("won");
    expect(store.getState().grid.strikeType).toBe(3);
    let winningPlayer = screen.getByTestId("winningPlayer");
    expect(getNodeText(winningPlayer)).toBe("player wins:O");
  });

  it("should return thr gamestate to be draw", () => {
    let store = createMockStore({
      ...initialState,
      gridFrame: [
        ["X", "X", "O"],
        ["O", "O", "X"],
        ["X", "O", "X"],
      ],
      nextMove: "O",
      gameState: "draw",
      strikeType: null,
    });

    render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );
    expect(store.getState().grid.gameState).toBe("draw");
    let winningPlayer = screen.getByTestId("winningPlayer");
    expect(getNodeText(winningPlayer)).toBe("player wins:game draw");
  });

  it("onClick reset button", () => {
    let store = createMockStore({
      ...initialState,
      gridFrame: [
        ["X", "X", "O"],
        ["O", "O", "X"],
        ["X", "O", "X"],
      ],
      nextMove: "O",
      gameState: "draw",
      strikeType: null,
    });
    render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("resetButton"));
    expect(store.getState().grid).toBe(initialState);
  });
});
