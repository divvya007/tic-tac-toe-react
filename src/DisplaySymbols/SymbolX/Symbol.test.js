import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import SymbolX from ".";

describe("render for symbol X", () => {
  it("should render div", () => {
    render(<SymbolX />);
    let styleX = screen.getByTestId("styleX");
    expect(styleX).toBeTruthy();
    let reverseSymbolX = screen.getByTestId("styleXReverse");
    expect(reverseSymbolX).toBeTruthy();

    expect(styleX).toHaveStyle("transform: rotate(50deg)");
    expect(reverseSymbolX).toHaveStyle("transform: rotate(128deg)");
  });
});
