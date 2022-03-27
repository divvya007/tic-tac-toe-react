import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import SymbolO from ".";

describe("testing symbol component O", () => {
  it("should render without any problems", () => {
    render(<SymbolO />);

    let circleDom = screen.getByTestId("circle");
    expect(circleDom).toBeTruthy();
    expect(circleDom).toHaveStyle("width: 36px;");
    expect(circleDom).toHaveStyle("border-radius: 25px;");
    expect(circleDom).toHaveStyle("background-color: transparent;");
  });
});
