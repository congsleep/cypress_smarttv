import '../custom_function/Setup.js'
import '../custom_function/On_Error.js'

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
        cy.get('.w-11').key_enter()
        // Chuyển qua tab đăng nhập bằng SĐT
        cy.get('.sc-AxjAm > .focused')
            .key_right()
            .key_right()
            .key_enter()
        cy.get('.keyboard', {timeout: 5000}).should('be.visible').key_down()
        cy.input_valid_phone_num()
        cy.get('.btn').key_down().key_enter().key_down().key_down()     // Button Tiếp tục
        cy.input_valid_otp()
        cy.get('.w-11').key_down().key_down().key_enter()               // Button Đăng nhập
        cy.from_home_sign_out()
        
    })

    // Nhập số điện thoại chưa đăng ký
    it('C73', function () {
        cy.Homepage()
        // Kiểm tra hiển thị focus
        cy.get('.sc-AxiKw > .focused', {timeout: 15000}).should('be.visible')
        // Truy cập menu Đăng nhập
        cy.nav_to_menu_login()
        // Kiểm tra text Header
        cy.get('.sign-out-name')
            .contains('Hãy đăng nhập VieON để có những trải nghiệm tốt nhất')
        cy.get('.w-11').key_enter()
        // Chuyển qua tab đăng nhập bằng SĐT
        cy.get('.sc-AxjAm > .focused')
            .key_right()
            .key_right()
            .key_enter()
        cy.get('.keyboard', {timeout: 5000}).should('be.visible').key_down()
        cy.input_not_registered_phone_num()
        cy.get('body').key_down().key_enter()
        cy.get('.popup-alert-inner').should('be.visible')
            .and('have.text','Số điện thoại không hợp lệ')
    })

    // Không nhập số điện thoại
    it('C74', function () {
        cy.Homepage()
        // Kiểm tra hiển thị focus
        cy.get('.sc-AxiKw > .focused', {timeout: 15000}).should('be.visible')
        // Truy cập menu Đăng nhập
        cy.nav_to_menu_login()
        // Kiểm tra text Header
        cy.get('.sign-out-name')
            .contains('Hãy đăng nhập VieON để có những trải nghiệm tốt nhất')
        cy.get('.w-11')
            .key_enter()
        // Chuyển qua tab đăng nhập bằng SĐT
        cy.get('.sc-AxjAm > .focused')
            .key_right()
            .key_right()
            .key_enter()
        cy.get('.keyboard', {timeout: 5000}).should('be.visible')
            .key_down().key_down().key_enter()
        cy.get('.popup-alert-inner').should('be.visible')
            .and('have.text','Vui lòng nhập số điện thoại đã đăng ký tài khoản VieON')
    })

    // Nhập mã OTP sai
    it('C75_1', function () {
        cy.Homepage()
        // Kiểm tra hiển thị focus
        cy.get('.sc-AxiKw > .focused', {timeout: 15000}).should('be.visible')
        // Truy cập menu Đăng nhập
        cy.nav_to_menu_login()
        // Kiểm tra text Header
        cy.get('.sign-out-name')
            .should('have.text','Hãy đăng nhập VieON  để có những trải nghiệm tốt nhất')
        cy.get('.w-11')
            .key_enter()
        // Chuyển qua tab đăng nhập bằng SĐT
        cy.get('.sc-AxjAm > .focused')
            .key_right()
            .key_right()
            .key_enter()
        cy.get('.keyboard', {timeout: 5000}).should('be.visible')
            .key_down()
        cy.input_valid_phone_num()
        cy.get('body').key_down().key_enter()   // button Tiếp tục
        cy.get('.sign-out-mail')
            .should('have.text','Vui lòng nhập mã xác nhận vừa được gửi tớisố điện thoại')
        cy.input_invalid_otp()
        cy.get('body').key_down().key_enter()   // button Xác nhận
        cy.get('.popup-alert-inner').should('be.visible')
            .and('have.text','Mã xác nhận không đúng hoặc hết hạn. Vui lòng chọn gửi lại')
    })

    // Không nhập mã OTP
    it('C76', function () {
        cy.Homepage()
        // Kiểm tra hiển thị focus
        cy.get('.sc-AxiKw > .focused', {timeout: 15000}).should('be.visible')
        // Truy cập menu Đăng nhập
        cy.nav_to_menu_login()
        // Kiểm tra text Header
        cy.get('.sign-out-name')
            .should('have.text','Hãy đăng nhập VieON  để có những trải nghiệm tốt nhất')
        cy.get('.w-11')
            .key_enter()
        // Chuyển qua tab đăng nhập bằng SĐT
        cy.get('.sc-AxjAm > .focused')
            .key_right()
            .key_right()
            .key_enter()
        cy.get('.keyboard', {timeout: 5000}).should('be.visible')
            .key_down()
        cy.input_valid_phone_num()
        cy.get('body').key_down().key_enter()   // button Tiếp tục
        cy.get('.sign-out-mail')
            .should('have.text','Vui lòng nhập mã xác nhận vừa được gửi tớisố điện thoại')
        // input no OTP code
        cy.get('body').key_down().key_enter()   // button Xác nhận
        cy.get('.popup-alert-inner').should('be.visible')
            .and('have.text','Mã xác nhận phải có 4 kí tự')
    })
})