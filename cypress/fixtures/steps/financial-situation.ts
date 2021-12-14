import { E2eParams } from "../../support/core/app.helpers";

export function handleFinancialSituationPage(params: E2eParams): void {
  describe("financial situation page", () => {
    cy.log("should display correct url");
    cy.url().should("include", "financialsituation");

    cy.log("should enter mainIncome");
    cy.yucTextBox(
      params.funnelState.financialSituationStep.mainIncome,
      "mainIncome"
    );

    if (params.funnelState.financialSituationStep.coIncome) {
      cy.log("should enter coIncome");
      cy.yucTextBox(
        params.funnelState.financialSituationStep.coIncome,
        "coIncome"
      );
    }

    cy.log("should select number of months of payment");
    cy.yucSelectBox(
      params.funnelState.financialSituationStep.numberOfMonthsOfPayment,
      "numberOfMonthsOfPayment"
    );

    if (params.funnelState.financialSituationStep.mortgageAmount) {
      cy.log("should enter mortgageAmount");
      cy.yucTextBox(
        params.funnelState.financialSituationStep.mortgageAmount,
        "mortgageAmount"
      );
    }

    if (params.funnelState.financialSituationStep.RentAmount) {
      cy.log("should enter rentAmount");
      cy.yucTextBox(
        params.funnelState.financialSituationStep.RentAmount,
        "rentAmount"
      );
    }

    if (params.funnelState.financialSituationStep.loanCount != "0") {
      params.funnelState.financialSituationStep.loans.forEach(
        (loan: any, index: number) => {
          cy.log(`should fill the loanType for loan ${index}`);
          const locationSelect = `option[id="TYPE_${loan.loanType.toUpperCase()}"]`;
          cy.get("yuc-loan")
            .get(locationSelect)
            .parent()
            .eq(index)
            .select(`${loan.loanType}`);

          cy.log(`should fill the loanAmount for loan ${index}`);
          const locationText = "dyn-textbox#loanAmount";
          cy.get("yuc-loan")
            .get(locationText)
            .find("input")
            .eq(index)
            .type(loan.loanAmount);
        }
      );
    }

    cy.log("should select isLateOnPayment");
    if (
      params.funnelState.financialSituationStep.isLateOnPayment !== undefined
    ) {
      cy.yucRadioBox(
        params.funnelState.financialSituationStep.isLateOnPayment,
        "isLateOnPayment"
      );
    }

    cy.log("should click next");
    cy.yucClickBtnNext();
  });
}
