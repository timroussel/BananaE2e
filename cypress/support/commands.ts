// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

// add new command to the existing Cypress interface

declare global {
  namespace Cypress {
    interface Chainable {
      yucClickBtnNext: typeof yucClickBtnNext;
      yucSelectBox: typeof yucSelectBox;
      yucSelectBoxIsValid: typeof yucSelectBoxIsValid;
      yucRadioBox: typeof yucRadioBox;
      yucDatePickerDayMonthYear: typeof yucDatePickerDayMonthYear;
      yucDatePickerMonthYear: typeof yucDatePickerMonthYear;
      yucDatePickerYear: typeof yucDatePickerYear;
      yucTextBox: typeof yucTextBox;
      yucTextBoxWithValidityCheckOnblur: typeof yucTextBoxWithValidityCheckOnblur;
      yucCheckBox: typeof yucCheckBox;
      yucSelectCheckBox: typeof yucSelectCheckBox;
      yucAutoComplete: typeof yucAutoComplete;
      yucAutoCompleteV2: typeof yucAutoCompleteV2;
      yucAutoCompleteNoListExpected: typeof yucAutoCompleteNoListExpected;
      yucCheckTagValue: typeof yucCheckTagValue;
      yucCheckNumberOfTimeTagSent: typeof yucCheckNumberOfTimeTagSent;
      yucCheckTextBoxIsValid: typeof yucCheckTextBoxIsValid;
      yucAddressAutoComplete: typeof yucAddressAutoComplete;
      yucActIfIdExists: typeof yucActIfIdExists;
    }
  }
}

export function yucClickBtnNext() {
  return cy.get('[data-test="navigator-compact-forward"]').click();
}

export function yucSelectBox(optionValue: string, selectBoxId: string) {
  const location = `option[id="${selectBoxId.toUpperCase()}_${optionValue.toUpperCase()}"]`;
  let valueToSelect = optionValue.toUpperCase();
  if (valueToSelect === 'TRUE' || valueToSelect === 'FALSE') {
    valueToSelect = valueToSelect.toLowerCase();
  }
  return cy
    .get(location)
    .parent()
    .select(`${valueToSelect}`);
}

export function yucSelectBoxIsValid(id: string) {
  cy.get(`#${id}-input`)
    .first()
    .should('have.class', 'ng-valid');
}

export function yucAutoComplete(value: string, id: string) {
  const location = `dyn-autocomplete#${id} > div`;
  const div = cy.get(location).first();
  const input = div.find('input').first();
  input.type(value.substring(0, 3));
  cy.get(location)
    .first()
    .find('li')
    .eq(1)
    .click();
  const locationInput = `#${id} > .fieldset > .wrapper-fieldset > .wrapper-input > input`;
  cy.get(locationInput, { timeout: 10000 }).should('have.class', 'ng-valid');
}

export function yucAddressAutoComplete(text: any, id: string) {
  const location = 'yuc-address-autocomplete#' + id;
  const addressAutoComplete = cy.get(location).first();

  addressAutoComplete
    .find('input')
    .first()
    .type(text)
    .wait(2000)
    .parent()
    .find('ul li')
    .first()
    .click();
  cy.get(location)
    .first()
    .find('input')
    .should('have.class', 'ng-valid');
}

export function yucAutoCompleteV2(value: string, id: string) {
  const location = `dyn-autocomplete#${id} > div`;
  const div = cy.get(location).first();
  const input = div.find('input').first();
  input.type(value.substring(0, 3));
  cy.get(`ul.auto-complete-results`)
    .first()
    .find('li')
    .eq(1)
    .find('span')
    .click();
  cy.get(`ul.auto-complete-results`)
    .first()
    .find('li')
    .eq(1)
    .find('span')
    .click();
  const locationInput = `#${id} > .fieldset > .wrapper-fieldset > .wrapper-input > input`;
  cy.get(locationInput, { timeout: 10000 }).should('have.class', 'ng-valid');
}

export function yucAutoCompleteNoListExpected(value: string, id: string) {
  const location = `dyn-autocomplete#${id} > div`;
  const div = cy.get(location).first();
  const input = div.find('input').first();
  input.type(value.substring(0, 3));
  const locationInput = `#${id}-input`;
  cy.get(locationInput, { timeout: 10000 }).should('have.class', 'ng-valid');
}

export function yucDatePickerMonthYear(ticks: any, id: string) {
  const date = new Date(new Date().setTime(ticks));
  cy.log('-yucDatePickerMonthYear-----------------date = ' + ticks);
  cy.log('-yucDatePickerMonthYear-----------------date = ' + date);
  const location = 'dyn-datepicker#' + id;
  const start = cy.get(location).first();
  start.find('input[type=tel]').each(($el, index, _) => {
    if (index == 0) {
      cy.wrap($el).type((date.getMonth() + 1).toString());
    }
    if (index == 1) {
      cy.wrap($el).type(date.getFullYear().toString());
    }
  });
}

export function yucDatePickerDayMonthYear(ticks: any, id: string) {
  const date = new Date(new Date().setTime(ticks));
  cy.log('-yucDatePickerDayMonthYear-----------------date = ' + ticks);
  cy.log('-yucDatePickerDayMonthYear-----------------date = ' + date);
  const location = 'dyn-datepicker#' + id;
  const start = cy.get(location).first();
  start.find('input[type=tel]').each(($el, index, _) => {
    if (index == 0) {
      cy.wrap($el).type(date.getDate().toString());
    }
    if (index == 1) {
      cy.wrap($el).type((date.getMonth() + 1).toString());
    }
    if (index == 2) {
      cy.wrap($el).type(date.getFullYear().toString());
    }
  });
}

export function yucDatePickerYear(ticks: any, id: string) {
  const date = new Date(new Date().setTime(ticks));
  cy.log('-yucDatePickerYear-----------------date = ' + ticks);
  cy.log('-yucDatePickerYear-----------------date = ' + date);
  const location = 'dyn-datepicker#' + id;
  const start = cy.get(location).first();
  start.find('input[type=tel]').each(($el, index, _) => {
    if (index == 0) {
      cy.wrap($el).type(date.getFullYear().toString());
    }
  });
}

export function yucTextBox(text: any, id: string) {
  const location = 'dyn-textbox#' + id;
  const textBox = cy.get(location).first();

  textBox
    .find('input')
    .first()
    .type(text)
    .should('have.class', 'ng-valid');
}

export function yucTextBoxWithValidityCheckOnblur(text: any, id: string) {
  const location = 'dyn-textbox#' + id;
  const textBox = cy.get(location).first();

  textBox
    .find('input')
    .first()
    .type(text)
    .blur()
    .should('have.class', 'ng-valid');
}

export function yucCheckTextBoxIsValid(id: string) {
  const location = 'dyn-textbox#' + id;
  const textBox = cy.get(location).first();
  textBox
    .find('input', { timeout: 100000 })
    .first()
    .should('have.class', 'ng-valid');
}

export function yucRadioBox(optionValue: string, id: string) {
  const location = `label[for="${id.toUpperCase()}_${optionValue.toUpperCase()}"]`;
  cy.get(location)
    .first()
    .click();
}

export function yucCheckBox() {
  cy.get('[type="checkbox"]')
    .first()
    .check({ force: true });
}

export function yucSelectCheckBox(id: string) {
  cy.get(`#${id} [type="checkbox"]`)
    .first()
    .check({ force: true });
}

export function yucCheckTagValue(
  pageIdentifier: string,
  eulerianParameterName: string,
  expectedValue: string
): void {
  cy.wait(4000)
    .window()
    .then(win => {
      const tag = win.performance
        .getEntries()
        .filter(r => r.name.indexOf('yoc.younited-credit.com') > -1)
        .filter(r => r.name.indexOf(pageIdentifier) > -1)
        .map(r => r.name)
        .pop();
      const urlParams = new URLSearchParams(tag);
      expect(
        <string>urlParams.get(eulerianParameterName)?.toLowerCase()
      ).to.equal(expectedValue?.toLowerCase());
    });
}

export function yucCheckNumberOfTimeTagSent(
  eulerianParameterName: string,
  expectedNumberOfTime: number
): void {
  cy.window().then(win => {
    const tags = win.performance
      .getEntries()
      .filter(r => r.name.indexOf('yoc.younited-credit.com') > -1)
      .filter(r => r.name.indexOf(eulerianParameterName) > -1)
      .map(r => r.name);

    expect(tags.length).to.equal(expectedNumberOfTime);
  });
}

export function yucActIfIdExists(id: string, action: any): void {
  cy.get('body').then($body => {
    if ($body.find(`#${id}`).length > 0) {
      action();
    }
  });
}

Cypress.Commands.add('yucClickBtnNext', yucClickBtnNext);
Cypress.Commands.add('yucSelectBox', yucSelectBox);
Cypress.Commands.add('yucSelectBoxIsValid', yucSelectBoxIsValid);
Cypress.Commands.add('yucDatePickerMonthYear', yucDatePickerMonthYear);
Cypress.Commands.add('yucDatePickerDayMonthYear', yucDatePickerDayMonthYear);
Cypress.Commands.add('yucDatePickerYear', yucDatePickerYear);
Cypress.Commands.add('yucTextBox', yucTextBox);
Cypress.Commands.add(
  'yucTextBoxWithValidityCheckOnblur',
  yucTextBoxWithValidityCheckOnblur
);
Cypress.Commands.add('yucCheckTextBoxIsValid', yucCheckTextBoxIsValid);
Cypress.Commands.add('yucRadioBox', yucRadioBox);
Cypress.Commands.add('yucCheckBox', yucCheckBox);
Cypress.Commands.add('yucSelectCheckBox', yucSelectCheckBox);
Cypress.Commands.add('yucAutoComplete', yucAutoComplete);
Cypress.Commands.add('yucAutoCompleteV2', yucAutoCompleteV2);
Cypress.Commands.add('yucAddressAutoComplete', yucAddressAutoComplete);
Cypress.Commands.add(
  'yucAutoCompleteNoListExpected',
  yucAutoCompleteNoListExpected
);
Cypress.Commands.add('yucCheckTagValue', yucCheckTagValue);
Cypress.Commands.add(
  'yucCheckNumberOfTimeTagSent',
  yucCheckNumberOfTimeTagSent
);
Cypress.Commands.add('yucActIfIdExists', yucActIfIdExists);
