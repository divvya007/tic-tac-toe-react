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
  cy.get('[data-testid="winningPlayer"]').as("winningPlayerContainer");
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
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of X is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="styledXContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow O to win for 1st row", () => {
    cy.visit("http://localhost:3000");

    cy.get("@10").click();
    cy.get("@00").click();
    cy.get("@11").click();
    cy.get("@01").click();
    cy.get("@20").click();
    cy.get("@02").click();

    // 1. green line should appear on the first row
    cy.get("[data-testid=strike-1 ]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of O is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="circleContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 2nd row to win for X", () => {
    cy.get("@10").click();
    cy.get("@00").click();
    cy.get("@11").click();
    cy.get("@01").click();
    cy.get("@12").click();

    // 1. green line should appear on the first row
    cy.get("[data-testid=strike-2]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of X is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="styledXContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 2nd row to win for O", () => {
    cy.get("@00").click();
    cy.get("@10").click();
    cy.get("@20").click();
    cy.get("@11").click();
    cy.get("@21").click();
    cy.get("@12").click();

    // green line
    cy.get("[data-testid=strike-2]").should("be.visible");
    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of O is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="circleContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 3rd row for X", () => {
    cy.get("@20").click();
    cy.get("@00").click();
    cy.get("@21").click();
    cy.get("@01").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-3]").should("be.visible");
    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of X is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="styledXContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 3rd row for O", () => {
    cy.get("@00").click();
    cy.get("@20").click();
    cy.get("@10").click();
    cy.get("@21").click();
    cy.get("@12").click();
    cy.get("@22").click();

    // green line should be visible

    cy.get("[data-testid=strike-3]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of O is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="circleContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 4th row to win for X", () => {
    cy.get("@00").click();
    cy.get("@01").click();
    cy.get("@10").click();
    cy.get("@11").click();
    cy.get("@20").click();

    cy.get("[data-testid=strike-4]").should("be.visible");
    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of X is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="styledXContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 4th column to win for O", () => {
    cy.get("@01").click();
    cy.get("@00").click();
    cy.get("@02").click();
    cy.get("@10").click();
    cy.get("@11").click();
    cy.get("@20").click();

    cy.get("[data-testid=strike-4]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of O is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="circleContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 5th column to win for X", () => {
    cy.get("@01").click();
    cy.get("@02").click();
    cy.get("@11").click();
    cy.get("@12").click();
    cy.get("@21").click();

    cy.get("[data-testid=strike-5]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of X is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="styledXContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 5th column to win for O", () => {
    cy.get("@00").click();
    cy.get("@01").click();
    cy.get("@02").click();
    cy.get("@11").click();
    cy.get("@12").click();
    cy.get("@21").click();

    cy.get("[data-testid=strike-5]").should("be.visible");
    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of O is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="circleContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 6th column to win for X", () => {
    cy.get("@02").click();
    cy.get("@11").click();
    cy.get("@12").click();
    cy.get("@00").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-6]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of X is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="styledXContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 6th column to win for O", () => {
    cy.get("@00").click();
    cy.get("@02").click();
    cy.get("@01").click();
    cy.get("@12").click();
    cy.get("@11").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-6]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of O is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="circleContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 7th column to win for X", () => {
    cy.get("@00").click();
    cy.get("@02").click();
    cy.get("@11").click();
    cy.get("@12").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-7]").should("be.visible");
    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of X is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="styledXContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 7th column to win for O", () => {
    cy.get("@02").click();
    cy.get("@00").click();
    cy.get("@12").click();
    cy.get("@11").click();
    cy.get("@01").click();
    cy.get("@22").click();

    cy.get("[data-testid=strike-7]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of O is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="circleContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });
  it("should allow 8th column to win for X", () => {
    cy.get("@02").click();
    cy.get("@12").click();
    cy.get("@11").click();
    cy.get("@00").click();
    cy.get("@20").click();

    cy.get("[data-testid=strike-8]").should("be.visible");
    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of X is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="styledXContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });

  it("should allow 8th column to win for O", () => {
    cy.get("@12").click();
    cy.get("@02").click();
    cy.get("@01").click();
    cy.get("@11").click();
    cy.get("@10").click();
    cy.get("@20").click();

    cy.get("[data-testid=strike-8]").should("be.visible");

    // 2. Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // 3. "reset button" should be visible
    cy.get('[data-testid="resetButton"]').should("be.visible");
    cy.get('[data-testid="resetButton"]').contains("RESET GAME");

    // container of O is visible
    cy.get("@winningPlayerContainer")
      .get('[data-testid="circleContainer"]')
      .should("be.visible");

    // winning text box is visible
    cy.get('[data-testid="winBox"]').should("be.visible");
    cy.get('[data-testid="winBox"]').contains("Wins");
  });
});
