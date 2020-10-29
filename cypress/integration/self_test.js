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
            .and('have.text','Đăng ký')
        cy.key_enter()
        cy.get('[data-index="0"] > .lst-nation-item-txt').should('be.visible').and('have.text','ĐĂNG NHẬP BẰNG APP VIEON')
        cy.check_screen_login_via_app_code()
        cy.get('.code').then(($login_code_1) => {
            const login_code_1 = $login_code_1.text()   // lưu giá trị
            cy.wait(305000)
            cy.get('.code').should(($login_code_2) => {
                expect($login_code_2.text()).not.to.eq(login_code_1)
            })
        })  
        cy.get('body').key_right().key_enter()
        cy.check_screen_login_via_website_code()
        cy.get('.text').then(($login_code_1) => {
            const login_code_1 = $login_code_1.text()   // lưu giá trị
            cy.wait(305000)
            cy.get('.text').should(($login_code_2) => {
                expect($login_code_2.text()).not.to.eq(login_code_1)
            })
        })

    })
})