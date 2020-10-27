Cypress.Commands.add('Homepage', () => {
    cy.visit('/', { onBeforeLoad: (win) => { win.sessionStorage.clear() } })
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })