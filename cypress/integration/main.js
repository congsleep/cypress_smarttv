import '../function/Setup.js'

describe('Login', function (){
    it('C34', function (){
        cy.Homepage();
        cy.get('.focused > .article > .article-thumb', {timeout: 15000}).should('be.visible')
        cy.get('.focused > .article > .article-thumb').click();
    })
})