Cypress.Commands.add('Homepage', () => {
    cy.visit('/', { onBeforeLoad: (win) => { win.sessionStorage.clear() } })
})