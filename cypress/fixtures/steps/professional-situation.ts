import { E2eParams } from "../../support/core/app.helpers";

export function handleMainApplicantProfessionalSituationPage(
  params: E2eParams
): void {
  describe("professionalsituationn page", () => {
    cy.log("should display correct url");
    cy.url().should("include", "professionalsituation");

    cy.log("should select contractType");
    cy.yucSelectBox(
      params.funnelState.professionalSituationStep.contractType,
      "PROFESSIONALSITUATION"
    );

    cy.log("should select activitySector");
    cy.yucRadioBox(
      params.funnelState.professionalSituationStep.activitySector,
      "SECTOR"
    );

    cy.log("should select profession");
    cy.yucSelectBox(
      params.funnelState.professionalSituationStep.profession,
      "profession"
    );

    cy.log("should set from date");
    cy.yucDatePickerMonthYear(
      params.funnelState.professionalSituationStep.employedFrom,
      "employedFrom"
    );

    cy.log("should can click next");
    cy.yucClickBtnNext();
  });
}
