import { E2eParams } from '../../support/core/app.helpers';

export function handleOutcomesPage(params: E2eParams): void {
  describe('outcomes page', () => {
    cy.log('should display correct url');
    cy.url().should('include', 'outcomes');

    if (params.funnelState.outcomesStep.mortgageAmount != '0') {
      cy.log('should enter mortgageAmount');
      cy.yucTextBox(
        params.funnelState.outcomesStep.mortgageAmount,
        'mortgageAmount'
      );
    } else {
      cy.log('should enter rentAmount');
      cy.yucTextBox(params.funnelState.outcomesStep.rentAmount, 'rentAmount');
    }

    cy.log('should select loanCount');
    cy.yucSelectBox(
      (<number>params.funnelState.outcomesStep.loanCount).toString(),
      'loanCount'
    );

    if (params.funnelState.outcomesStep.loanCount != '0') {
      params.funnelState.outcomesStep.loans.forEach(
        (loan: any, index: number) => {
          cy.log(`should fill the loanType for loan ${index}`);
          const locationSelect = `option[id="TYPE_${loan.loanType.toUpperCase()}"]`;
          cy.get('yuc-loan')
            .get(locationSelect)
            .parent()
            .eq(index)
            .select(`${loan.loanType}`);

          cy.log(`should fill the loanAmount for loan ${index}`);
          const locationText = 'dyn-textbox#loanAmount';
          cy.get('yuc-loan')
            .get(locationText)
            .find('input')
            .eq(index)
            .type(loan.loanAmount);
        }
      );

      if (params.funnelState.financialSituationStep.isLateOnPayment == true) {
        cy.log('should select isLateOnPayment');
        cy.yucRadioBox(
          params.funnelState.financialSituationStep.isLateOnPayment,
          'isLateOnPayment'
        );
      }
    }

    cy.log('should click next');
    cy.yucClickBtnNext();
  });
}
