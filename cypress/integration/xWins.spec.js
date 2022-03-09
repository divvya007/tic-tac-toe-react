beforeEach(() => {
  cy.visit("http://localhost:3000");
  cy.get('[data-testid="tile-0-0"]').as("00");
  cy.get('[data-testid="tile-0-1"]').as("01");
  cy.get('[data-testid="tile-0-2"]').as("02");
  cy.get('[data-testid="tile-1-0"]').as("10");
  cy.get('[data-testid="tile-1-1"]').as("11");
  cy.get('[data-testid="tile-1-2"]').as("12");
  cy.get('[data-testid="tile-2-0"]').as("20");
  cy.get('[data-testid="tile-2-1"]').as("21");
  cy.get('[data-testid="tile-2-2"]').as("22");
  // for winning player container
  cy.get('[data-testid="winning-player"]').as("winningPlayerContainer");
});

describe("X and O winning scenarios", () => {
  it("should allow x to win for 1st row", () => {
    cy.get("@00").click();
    cy.get("@10").click();
    cy.get("@01").click();
    cy.get("@11").click();
    cy.get("@02").click();

    // 1. green line should appear on the first row
    cy.get('[data-testid="strike-1"]').should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@12").click();
    cy.get("@12").children().should("have.length", 0);

    // 3. "player x wins" should be visible
    cy.get("@winningPlayerContainer").contains("player wins:X");
  });

  it("should allow O to win for 1st row", () => {
    cy.visit("http://localhost:3000");

    cy.get("@10").click();
    cy.get("@00").click();
    cy.get("@11").click();
    cy.get("@01").click();
    cy.get("@20").click();
    cy.get("@02").click();

    // 1. "player x wins" should be visible
    cy.get("@winningPlayerContainer").contains("player wins:O");
    // 2. green line should appear on the first row
    cy.get("[data-testid=strike-1 ]").should("be.visible");

    // 3. Nothing else should be clickable
    cy.get("@12").click();
    cy.get("@12").children().should("have.length", 0);
  });

  it("should allow 2nd row to win for X", () => {
    cy.get("@10").click();
    cy.get("@00").click();
    cy.get("@11").click();
    cy.get("@01").click();
    cy.get("@12").click();

    cy.get("@winningPlayerContainer").contains("player wins:X");

    cy.get("[data-testid=strike-2]").should("be.visible");

    cy.get("@02").click();
    cy.get("@02").children().should("have.length", 0);
  });

  it("should allow 2nd row to win for O", () => {
    cy.get("@00").click();
    cy.get("@10").click();
    cy.get("@20").click();
    cy.get("@11").click();
    cy.get("@21").click();
    cy.get("@12").click();

    cy.get("@winningPlayerContainer").contains("player wins:O");
    // green line
    cy.get("[data-testid=strike-2]").should("be.visible");
    cy.get("@22").click();
    cy.get("@22").children().should("have.length", 0);
  });

  it("should allow 3rd row for X", () => {
    cy.get("@20").click();
    cy.get("@00").click();
    cy.get("@21").click();
    cy.get("@01").click();
    cy.get("@22").click();

    cy.get("@winningPlayerContainer").contains("player wins:X");
    cy.get("[data-testid=strike-3]").should("be.visible");
    cy.get("@11").click();
    cy.get("@11").children().should("have.length", 0);
  });

  it("should allow 3rd row for O", () => {
    cy.get("@00").click();
    cy.get("@20").click();
    cy.get("@10").click();
    cy.get("@21").click();
    cy.get("@12").click();
    cy.get("@22").click();

    cy.get("@winningPlayerContainer").contains("player wins:O");
    cy.get("[data-testid=strike-3]").should("be.visible");
    cy.get("@11").click();
    cy.get("@11").children().should("have.length", 0);
  });

  it("should allow 4th row to win for X", () => {
    cy.get("@00").click();
    cy.get("@01").click();
    cy.get("@10").click();
    cy.get("@11").click();
    cy.get("@20").click();

    cy.get("@winningPlayerContainer").contains("player wins:X");
    cy.get("[data-testid=strike-4]").should("be.visible");
    cy.get("@22").click();
    cy.get("@22").children().should("have.length", 0);
  });

  it("should allow 4th column to win for O", () => {
    cy.get("@01").click();
    cy.get("@00").click();
    cy.get("@02").click();
    cy.get("@10").click();
    cy.get("@11").click();
    cy.get("@20").click();

    cy.get("@winningPlayerContainer").contains("player wins:O");
    cy.get("[data-testid=strike-4]").should("be.visible");
    cy.get("@22").click();
    cy.get("@22").children().should("have.length", 0);
  });

  it("should allow 5th column to win for X", () => {
    cy.get("@01").click();
    cy.get("@02").click();
    cy.get("@11").click();
    cy.get("@12").click();
    cy.get("@21").click();

    cy.get("[data-testid=strike-5]").should("be.visible");

    cy.get("@winningPlayerContainer").contains("player wins:X");
    cy.get("@22").click();
    cy.get("@22").children().should("have.length", 0);
  });

  it("should allow 5th column to win for O", () => {
    cy.get("@00").click();
    cy.get("@01").click();
    cy.get("@02").click();
    cy.get("@11").click();
    cy.get("@12").click();
    cy.get("@21").click();

    cy.get("[data-testid=strike-5]").should("be.visible");

    cy.get("@winningPlayerContainer").contains("player wins:O");
    cy.get("@22").click();
    cy.get("@22").children().should("have.length", 0);
  });

  it("should allow 6th column to win for X", () => {
    cy.get("@02").click();
    cy.get("@11").click();
    cy.get("@12").click();
    cy.get("@00").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-6]").should("be.visible");

    cy.get("@winningPlayerContainer").contains("player wins:X");
    cy.get("@21").click();
    cy.get("@21").children().should("have.length", 0);
  });

  it("should allow 6th column to win for O", () => {
    cy.get("@00").click();
    cy.get("@02").click();
    cy.get("@01").click();
    cy.get("@12").click();
    cy.get("@11").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-6]").should("be.visible");

    cy.get("@winningPlayerContainer").contains("player wins:O");
    cy.get("@20").click();
    cy.get("@20").children().should("have.length", 0);
  });

  it("should allow 7th column to win for X", () => {
    cy.get("@00").click();
    cy.get("@02").click();
    cy.get("@11").click();
    cy.get("@12").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-7]").should("be.visible");

    cy.get("@winningPlayerContainer").contains("player wins:X");
    cy.get("@21").click();
    cy.get("@21").children().should("have.length", 0);
  });

  it("should allow 7th column to win for O", () => {
    cy.get("@02").click();
    cy.get("@00").click();
    cy.get("@12").click();
    cy.get("@11").click();
    cy.get("@01").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-7]").should("be.visible");

    cy.get("@winningPlayerContainer").contains("player wins:O");
    cy.get("@21").click();
    cy.get("@21").children().should("have.length", 0);
  });
  it("should allow 8th column to win for X", () => {
    cy.get("@02").click();
    cy.get("@12").click();
    cy.get("@11").click();
    cy.get("@00").click();
    cy.get("@20").click();

    cy.get("[data-testid=strike-8]").should("be.visible");

    cy.get("@winningPlayerContainer").contains("player wins:X");
    cy.get("@21").click();
    cy.get("@21").children().should("have.length", 0);
  });

  it("should allow 8th column to win for O", () => {
    cy.get("@12").click();
    cy.get("@02").click();
    cy.get("@01").click();
    cy.get("@11").click();
    cy.get("@10").click();
    cy.get("@20").click();

    cy.get("@winningPlayerContainer").contains("player wins:O");
    cy.get("[data-testid=strike-8]").should("be.visible");

    cy.get("@22").click();
    cy.get("@22").children().should("have.length", 0);
  });
});
