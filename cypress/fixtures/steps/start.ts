import { E2eParams } from '../../support/core/app.helpers';

export function overrideFunnelStartPage(
  params: E2eParams,
  urlToOverride = 'email'
): void {
  describe('first step url', () => {
    cy.log('should be override');
    cy.url({ timeout: 380000 })
      .should('include', urlToOverride)
      .then(_ => {
        if (!!params.featuresToActivate || !!params.featuresToDesactivate) {
          let featuresActivationParams = '&features-activation=';
          params.featuresToActivate?.forEach(element => {
            featuresActivationParams += element + '(activated);';
          });
          params.featuresToDesactivate?.forEach(element => {
            featuresActivationParams += element + '(disabled);';
          });
          cy.visit(params.startUrl + featuresActivationParams);
        }
      });
  });
}
