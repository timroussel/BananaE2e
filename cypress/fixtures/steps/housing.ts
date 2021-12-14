import { E2eParams } from "../../support/core/app.helpers";
import { CreditApplicationContexts } from "../../support/core/creditApplication-contexts";

export function handleHousingPage(params: E2eParams): void {
  describe("Housing situation page", () => {
    cy.log("should display correct url");
    cy.url().should("include", "housing");

    cy.log("should select status");
    cy.yucSelectBox(
      params.funnelState.housingStep.housingStatus,
      "housingStatus"
    );

    cy.log("should from date");
    cy.yucDatePickerMonthYear(
      params.funnelState.housingStep.housingStatusFrom,
      "HOMELESS"
    );

    cy.log("should click next");
    cy.yucClickBtnNext();
  });
}
