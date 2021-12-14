import {
  E2eParams,
  getDateFormatted,
  getE2eParamsDesktop
} from "../support/core/app.helpers";
import { handleBankPage } from "../fixtures/steps/bank";
import { handleContactPage } from "../fixtures/steps/contact";
import { handleEmailPage } from "../fixtures/steps/email";
import { handleFamilySituationPage } from "../fixtures/steps/family-situation";
import { handleHousingPage } from "../fixtures/steps/housing";
import { handleIncomesPage } from "../fixtures/steps/incomes";
import { handleMainApplicantProfessionalSituationPage } from "../fixtures/steps/professional-situation";
import { handleOutcomesPage } from "../fixtures/steps/outcomes";
import { handleYucIdentityPage } from "../fixtures/steps/yuc/fr/identity";
import { overrideFunnelStartPage } from "../fixtures/steps/start";

describe(`FR SMOKE ${Cypress.env(
  "environment"
)} : ${getDateFormatted()} `, () => {
  const params: E2eParams = getE2eParamsDesktop("FR_SINGLE");
  params.featuresToDesactivate = [
    "pro-active-debt-consolidation-active",
    "show-modify-amount",
    "new-up-sell"
  ];

  beforeEach(`navigating ${params.startUrl}`, () => {
    cy.visit(params.startUrl);
  });

  it("should succesfuly do an application until the contact step", function() {
    overrideFunnelStartPage(params);
    handleEmailPage(params);
    handleFamilySituationPage(params);
    handleHousingPage(params);
    handleMainApplicantProfessionalSituationPage(params);
    handleIncomesPage(params);
    handleOutcomesPage(params);
    handleBankPage(params);
    handleContactPage(params);
    handleYucIdentityPage(params);
  });
});
