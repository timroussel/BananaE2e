import { E2eParams } from "../../support/core/app.helpers";

export function handleEmailPage(params: E2eParams): void {
  describe("Email page", () => {
    cy.log("should display correct url");
    cy.url({ timeout: 180000 }).should("include", "email");

    cy.log("should accept Didomi if present");
    cy.yucActIfIdExists("didomi-notice-agree-button", () =>
      cy.get("#didomi-notice-agree-button").click()
    );

    cy.log("should enter email");
    cy.getCookie("SESSION_COOKIE").then(sessionIdCookie => {
      if (sessionIdCookie !== null) {
        cy.log(sessionIdCookie.value);
        console.log(sessionIdCookie.value);
      }
    });

    cy.get("input")
      .first()
      .type(params.funnelState.emailStep.email);

    cy.get("input", { timeout: 2000 })
      .first()
      .should("have.class", "ng-valid");

    cy.log("should accept the conditions if present");
    cy.yucActIfIdExists("areConditionsAccepted", () =>
      cy.yucSelectCheckBox("areConditionsAccepted")
    );

    cy.log("should click next");
    cy.yucClickBtnNext();
  });
}
