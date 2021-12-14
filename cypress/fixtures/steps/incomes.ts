import { E2eParams } from "../../support/core/app.helpers";

export function handleIncomesPage(params: E2eParams): void {
  describe("incomes page", () => {
    cy.log("should display correct url");
    cy.url().should("include", "incomes");

    cy.log("should enter mainIncome");
    cy.yucTextBox(params.funnelState.incomesStep.mainIncome, "mainIncome");

    cy.log("should click next");
    cy.yucClickBtnNext();
  });
}
