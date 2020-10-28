import '../custom_function/Setup.js'
import '../custom_function/On_Error.js'
import '../custom_function/Navigation.js'

describe('Login', function (){
    // Nhập đúng số điện thoại và mã OTP
    it('C34', function (){
        cy.Homepage()
        // Kiểm tra hiển thị focus
        cy.get('.sc-AxiKw > .focused', {timeout: 15000}).should('be.visible')
        // Truy cập menu Đăng nhập
        cy.nav_to_menu_login()
        // Kiểm tra text Header
        cy.get('.sign-out-name')
            .contains('Hãy đăng nhập VieON để có những trải nghiệm tốt nhất')
        cy.get('.w-11')
            .trigger('keydown', {keyCode:13, which:13})
        // Chuyển qua tab đăng nhập bằng SĐT
        cy.get('.sc-AxjAm > .focused')
            .trigger('keydown', {keyCode:39, which:39})
            .trigger('keydown', {keyCode:39, which:39})
            .trigger('keydown', {keyCode:13, which:13})
        cy.get('.keyboard', {timeout: 5000}).should('be.visible')
            .trigger('keydown', {keyCode:40, which:40})
        cy.nhap_sdt()
        cy.get('.btn').trigger('keydown', {keyCode:40, which:40}).trigger('keydown', {keyCode:13, which:13})
        cy.nhap_otp()
        cy.get('.w-11').trigger('keydown', {keyCode:40, which:40}).trigger('keydown', {keyCode:40, which:40}).trigger('keydown', {keyCode:13, which:13})
        
    })
    // it('C72', function (){
    //     cy.
    // })
})