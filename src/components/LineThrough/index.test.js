import { render, fireEvent, screen, getNodeText } from "@testing-library/react";

import LineThrough from ".";
import { expect } from "@jest/globals";

describe("testing LineThrough component", () => {
  it.each([1, 2, 3, 4, 5, 6, 7, 8])(
    "LineThrough component renders without crashing for: %d",
    (lineNum) => {
      render(<LineThrough strikeType={lineNum} />);

      let displayLineThrough = screen.getByTestId("strike-" + lineNum);
      expect(displayLineThrough).toBeTruthy();
    }
  );
});
