import { E2eParams } from "../../support/core/app.helpers";

export function handleFamilySituationPage(params: E2eParams): void {
  describe("Family situation page", () => {
    cy.log("should display correct url");
    cy.url({ timeout: 10000 }).should("include", "email");

    cy.log("should select status");
    cy.yucSelectBox(
      params.funnelState.familySituationStep.maritalStatusCode,
      "MARITALSTATUS"
    );

    cy.log("should select childNumber");
    cy.yucSelectBox(
      params.funnelState.familySituationStep.childNumber,
      "CHILDNUMBERPROPAL"
    );

    cy.log("click on checkbox data");
    cy.yucSelectCheckBox("yucDataManagementOptin");

    cy.log("should click next");
    cy.yucClickBtnNext();
  });
}
