// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
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
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


declare namespace Cypress {
  interface Chainable<Subject = any> {
    getIdField(): Chainable<JQuery>;
    getListPoks(): Chainable<JQuery>;
    getListPoksOptions(): Chainable<JQuery<HTMLElementTagNameMap['option']>>;
  }
}

Cypress.Commands.add('getIdField', () => {
  return cy.get('#searchField');
});

Cypress.Commands.add('getListPoks', () => {
  return cy.get('#listPoks');
});

Cypress.Commands.add('getListPoksOptions', () => {
  return cy.getListPoks().find('option');
});

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getPokemonTitle(): Chainable<JQuery>;
    getPokemonImg(): Chainable<JQuery<HTMLImageElement>>;
    getPokemonTypes(): Chainable<JQuery>;
    getPokemonHeight(): Chainable<JQuery>;
    getPokemonWeight(): Chainable<JQuery>;
    getPokemonStats(): Chainable<JQuery<HTMLTableRowElement>>;
  }
}

Cypress.Commands.add('getPokemonTitle', () => {
  return cy.get('#pokemonTitle');
});

Cypress.Commands.add('getPokemonImg', () => {
  return cy.get('#pokemonImg');
});

Cypress.Commands.add('getPokemonTypes', () => {
  return cy.get('#pokemonTypes');
});

Cypress.Commands.add('getPokemonHeight', () => {
  return cy.get('#pokemonHeight');
});

Cypress.Commands.add('getPokemonWeight', () => {
  return cy.get('#pokemonWeight');
});

Cypress.Commands.add('getPokemonStats', () => {
  return cy.get('#pokemonStats').find('tr');
});
