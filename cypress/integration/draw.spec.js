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

describe("game draw no player wins the game", () => {
  it("should draw the game and no player wins", () => {
    cy.get("@00").click();
    cy.get("@10").click();
    cy.get("@11").click();
    cy.get("@22").click();
    cy.get("@02").click();
    cy.get("@20").click();
    cy.get("@21").click();
    cy.get("@01").click();
    cy.get("@12").click();

    cy.get("@winningPlayerContainer").children().should("have.length", 1);

    //  Nothing else should be clickable
    cy.get("@winningPlayerContainer").should("be.visible");

    // game draw should be visible
    cy.get('[data-testid="gameDraw"]').contains("Game Draw");
  });
});
