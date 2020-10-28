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

// Mở trang chủ TV https://lg.vieon.vn
Cypress.Commands.add('Homepage', () => {
    cy.visit('/', { onBeforeLoad: (win) => { win.sessionStorage.clear() } })
})

//-----------------Starts Navigation assignment-----------------//
Cypress.Commands.add('key_left', () => {    // Left arrow
    cy.get('body')
        .trigger('keydown', {keyCode:37, which:37})
})

Cypress.Commands.add('key_up', () => {  //Up arrow
    cy.get('body')
        .trigger('keydown', {keyCode:38, which:38})
})

Cypress.Commands.add('key_right', () => {   // Right arrow
    cy.get('body')
        .trigger('keydown', {keyCode:39, which:39})
})

Cypress.Commands.add('key_down', () => {    // Down arrow
    cy.get('body')
        .trigger('keydown', {keyCode:40, which:40})
})

Cypress.Commands.add('key_enter', () => {   // Enter key
    cy.get('body')
        .trigger('keydown', {keyCode:13, which:13})
})
//-----------------End Navigation assignment-----------------//


Cypress.Commands.add('nav_to_menu_login', () =>{
    cy.get('body')
        .key_left()    // Mở Left menu
        .key_up()    // Lên trên
        .key_up()    // Lên trên
        .key_enter()    // Enter Menu Đăng nhập
})

Cypress.Commands.add('input_valid_phone_num', () =>{    // 0919777999
    cy.get('body').key_enter() //0
        .key_left().key_enter()    //9
        .key_left().key_left().key_left().key_up().key_enter()    //1
        .key_down().key_right().key_right().key_right().key_enter()    //9
        .key_left().key_left().key_enter().key_enter().key_enter()   //777
        .key_right().key_right().key_enter().key_enter().key_enter()    //999
})

Cypress.Commands.add('input_valid_otp', () =>{  // 1111
    cy.get('body')
        .key_down()
        .key_left()
        .key_left()
        .key_left()
        .key_left()
        .key_up()
        .key_enter()    // 1
        .key_enter()    // 1
        .key_enter()    // 1
        .key_enter()    // 1
})

Cypress.Commands.add('input_invalid_otp', () =>{
    cy.get('body')
        .key_enter()
        .key_enter()
        .key_enter()
        .key_enter()
})

Cypress.Commands.add('from_home_sign_out', () =>{
    cy.get('body')
        .key_left()
        .key_up().key_up()
        .key_enter()
        .key_right()
        .key_up()
        .key_right().key_right().key_right().key_right()
        .key_down()
        .key_enter()
})

Cypress.Commands.add('input_not_registered_phone_num', () =>{   //0999000000
    cy.get('body').key_enter() //0
    .key_left().key_enter().key_enter().key_enter()    //999
    .key_right().key_enter().key_enter().key_enter()    //000
    .key_enter().key_enter().key_left().key_left().key_enter()    //000
})