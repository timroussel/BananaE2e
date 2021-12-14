import { E2eParams } from "../../support/core/app.helpers";

export function handleBankPage(params: E2eParams): void {
  describe("bank page", () => {
    cy.log("should display correct url");
    cy.url().should("include", "bank");

    cy.log("should select bankcode");
    cy.yucSelectBox(params.funnelState.bankStep.bankCode, "BANKCODE");

    cy.log("should set bankFrom");
    cy.yucDatePickerYear(params.funnelState.bankStep.bankFrom, "bankFrom");

    cy.log("should click next");
    cy.yucClickBtnNext();
  });
}
