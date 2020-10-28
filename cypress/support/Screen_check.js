    // Check screen Đăng nhập qua Website
    it('check_screen_login_via_website_code', function () {
        cy.get('.card-text').should('be.visible')
            .and('have.text','Truy cập vieon.vn/link trên trình duyệt máy tính, điện thoại và nhập mã bên dưới (tự động thay đổi sau 5 phút)')
        cy.get('.high-light').should('be.visible')
            .and('have.text','vieon.vn/link')
        cy.get('.text').should('be.visible')
    })

    // Check screen Đăng nhập bằng app VieON
    it('check_screen_login_via_app_code', function () {
        // Item số 1
        cy.get('.card.card--login-step.card--login-app')
            .eq(0)
            .should('be.visible').and('have.text','1Tìm kiếm và cài đặt ứng dụng VieON trên Apple Store / Google Play Store, hoặc quét mã QR bên dưới để tải về')
        cy.get(':nth-child(1) > .card-header > .icon').should('be.visible')
        cy.get(':nth-child(1) > .card-body > .emulator').should('be.visible')
        cy.get(':nth-child(1) > .card-body > .emulator > img').should('be.visible')
        cy.get(':nth-child(1) > .card-header > .card-text > .high-light').should('have.text','cài đặt ứng dụng')
        // Item số 2
        cy.get('.card.card--login-step.card--login-app')
            .eq(1)
            .should('be.visible').and('have.text','2Mở ứng dụng VieON trên điện thoại và đăng ký / đăng nhập tài khoản VieON')
        cy.get(':nth-child(2) > .card-header > .icon').should('be.visible')
        cy.get(':nth-child(2) > .card-body > .emulator').should('be.visible')
        cy.get(':nth-child(2) > .card-body > .emulator > img').should('be.visible')
        cy.get('.hand-demo-pressed > img').should('be.visible')
        cy.get(':nth-child(1) > .card-header > .card-text > .high-light').should('have.text','đăng ký / đăng nhập tài khoản VieON')
        // Item số 3
        cy.get('.card.card--login-step.card--login-app')
            .eq(2)
            .should('be.visible').and('have.text','3Mở menu Đăng nhập SmartTV')
        cy.get(':nth-child(3) > .card-header > .icon').should('be.visible')
        cy.get(':nth-child(3) > .card-body > .emulator').should('be.visible')
        cy.get(':nth-child(3) > .card-body > .emulator > img').should('be.visible')
        cy.get('.img-select-smart-tv > img').should('be.visible')
        cy.get(':nth-child(1) > .card-header > .card-text > .high-light').should('have.text','Đăng nhập SmartTV')
        // Item số 4
        cy.get('.card.card--login-step.card--login-app')
            .eq(3)
            .should('be.visible').and('have.text','4Nhập mã dưới và hoàn tất (tự động thay đổi sau 5 phút)')
        cy.get(':nth-child(4) > .card-header > .icon').should('be.visible')
        cy.get(':nth-child(4) > .card-body > .emulator').should('be.visible')
        cy.get('.code').should('be.visible')    
        cy.get(':nth-child(1) > .card-header > .card-text > .high-light').should('have.text','Nhập mã')
    })