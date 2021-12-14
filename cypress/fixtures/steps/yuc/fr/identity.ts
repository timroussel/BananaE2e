import { E2eParams } from '../../../../support/core/app.helpers';

export function handleYucIdentityPage(params: E2eParams): void {
  describe('identity page', () => {
    cy.log('should display correct url');
    cy.url().should('include', 'identity');

    cy.log('should enter countryCode');
    cy.yucSelectBox(params.funnelState.identityStep.countryCode, 'countryCode');

    cy.log('should set birthPostalCode');
    cy.yucAddressAutoComplete(
      params.funnelState.identityStep.birthPostalCode,
      'locationOfBirthAutocomplete'
    );

    cy.log('should set genderCode');
    cy.yucRadioBox(params.funnelState.identityStep.genderCode, 'genderCode');

    if (!!params.funnelState.identityStep.maidenName) {
      cy.log('should set maidenName');
      cy.yucTextBox(params.funnelState.identityStep.maidenName, 'maidenName');
    }

    cy.log('should set lastName');
    cy.yucTextBox(params.funnelState.identityStep.lastName, 'lastName');

    cy.log('should set firstName');
    cy.yucTextBox(params.funnelState.identityStep.firstName, 'firstName');

    cy.log('should set dateOfBirth');
    cy.yucDatePickerDayMonthYear(
      params.funnelState.identityStep.dateOfBirth,
      'dateOfBirth'
    );

    cy.log('should click next');
    cy.yucClickBtnNext();
  });
}
