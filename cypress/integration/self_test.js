describe('self_test', function (){    
    it('C77', function () {
        cy.Homepage()
        cy.get('.sc-AxiKw > .focused', {timeout: 15000}).should('be.visible')
        cy.nav_to_menu_login()
        cy.get('.setting-inner > img').should('be.visible')
        cy.get('.sign-out-name').should('be.visible')
            .and('have.text','Hãy đăng nhập VieON  để có những trải nghiệm tốt nhất')
        cy.get('.sign-out-mail').should('be.visible')
            .and('have.text','Xem nội dung, kênh truyền hình bạn yêu thích và nhiều hơn thế nữa')
        cy.get('.w-11').should('be.visible')
            .and('have.text','Đăng nhập')
        cy.get('.btn--signup').should('be.visible')
            .and('have.text','Đăng ký').key_right().key_enter()
        

    })
})