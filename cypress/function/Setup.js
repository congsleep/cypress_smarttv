Cypress.Commands.add('Homepage', () => {
    cy.visit('/', { onBeforeLoad: (win) => { win.sessionStorage.clear() } })
})

Cypress.Commands.add('key_left', () => {
    cy.get('.sc-AxiKw > .focused')
        .trigger('keydown', {keyCode:37, which:37 })
})

Cypress.Commands.add('key_up', () => {
    cy.get('.sc-AxiKw > .focused')
        .trigger('keydown', {keyCode:38, which:38 })
})

Cypress.Commands.add('key_right', () => {
    cy.get('.sc-AxiKw > .focused')
        .trigger('keydown', {keyCode:39, which:39 })
})

Cypress.Commands.add('key_down', () => {
    cy.get('.sc-AxiKw > .focused')
        .trigger('keydown', {keyCode:40, which:40 })
})

Cypress.Commands.add('key_enter', () => {
    cy.get('.sc-AxiKw > .focused')
        .trigger('keydown', {keyCode:13, which:13 })
})

Cypress.Commands.add('nav_to_menu_login', () =>{
    cy.get('.sc-AxiKw > .focused').trigger('keydown', {keyCode:37, which:37 }) // Mở Left menu
    cy.get('.active > a')   // Menu Trang chủ
        .trigger('keydown', {keyCode: 38, which:38})    // Lên trên
    cy.get('.focused > a')  // Menu Tìm kiếm
        .trigger('keydown', {keyCode: 38, which:38})    // Lên trên
        .trigger('keydown', {keyCode: 13, which:13})    // Enter Menu Đăng nhập
})

Cypress.Commands.add('nhap_sdt', () =>{
    cy.get('[data-index="10"]').trigger('keydown', {keyCode: 13, which:13}) //0
    .trigger('keydown', {keyCode: 37, which:37}).trigger('keydown', {keyCode: 13, which:13})    //9
    .trigger('keydown', {keyCode: 37, which:37}).trigger('keydown', {keyCode: 37, which:37}).trigger('keydown', {keyCode: 37, which:37}).trigger('keydown', {keyCode: 38, which:38}).trigger('keydown', {keyCode: 13, which:13})    //1
    .trigger('keydown', {keyCode: 40, which:40}).trigger('keydown', {keyCode: 39, which:39}).trigger('keydown', {keyCode: 39, which:39}).trigger('keydown', {keyCode: 39, which:39}).trigger('keydown', {keyCode: 13, which:13})    //9
    .trigger('keydown', {keyCode: 37, which:37}).trigger('keydown', {keyCode: 37, which:37}).trigger('keydown', {keyCode: 13, which:13}).trigger('keydown', {keyCode: 13, which:13}).trigger('keydown', {keyCode: 13, which:13})   //777
    .trigger('keydown', {keyCode: 39, which:39}).trigger('keydown', {keyCode: 39, which:39}).trigger('keydown', {keyCode: 13, which:13}).trigger('keydown', {keyCode: 13, which:13}).trigger('keydown', {keyCode: 13, which:13})    //999
})

Cypress.Commands.add('nhap_otp', () =>{
    cy.get('.keyboard > :nth-child(2) > .focused')
    .trigger('keydown', {keyCode: 37, which:37})
    .trigger('keydown', {keyCode: 37, which:37})
    .trigger('keydown', {keyCode: 37, which:37})
    .trigger('keydown', {keyCode: 37, which:37})
    .trigger('keydown', {keyCode: 38, which:38})
    .trigger('keydown', {keyCode: 13, which:13})
    .trigger('keydown', {keyCode: 13, which:13})
    .trigger('keydown', {keyCode: 13, which:13})
    .trigger('keydown', {keyCode: 13, which:13})
})