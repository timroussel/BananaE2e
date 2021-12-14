import { E2eParams } from "../../support/core/app.helpers";
import { CreditApplicationContexts } from "../../support/core/creditApplication-contexts";

export function handleContactPage(params: E2eParams): void {
  describe("contact page", () => {
    cy.log("should display correct url");
    cy.url().should("include", "contact");

    cy.log("should enter cellPhoneNumber");
    cy.yucTextBoxWithValidityCheckOnblur(
      params.funnelState.contactStep.cellPhoneNumber,
      "cellPhoneNumber"
    );

    cy.log("should enter countryCode");
    cy.yucSelectBox(params.funnelState.contactStep.countryCode, "countryCode");

    if (params.creditApplicationContext === CreditApplicationContexts.France) {
      if (
        params?.creditApplicationContext === CreditApplicationContexts.France
      ) {
        cy.log("should enter address");
        cy.yucAddressAutoComplete(
          params.funnelState.contactStep.adress,
          "locationOfBirthAutocomplete"
        );
      } else {
        cy.log("should enter postalCode");
        cy.yucTextBoxWithValidityCheckOnblur(
          params.funnelState.contactStep.postalCode,
          "postalCode"
        );

        if (!!params.funnelState.contactStep.city) {
          cy.log("should enter city");
          cy.yucSelectBox(params.funnelState.contactStep.city, "city");
        }

        cy.log("should enter address");
        cy.yucTextBox(params.funnelState.contactStep.adress, "address");
      }
    }
  });
}
