//Edson's Test

describe("Website setup", () => {
    it("Should load the page", () => {
        cy.visit("http://localhost:3000")
    })
})

describe("Get to new user page", () => {
    it("Should be able to click register button", () => {
        cy.get("#register")
        .click()
    })
    it("Should direct you to register page", () => {
        cy.url().should("include","/register")
    })
})

describe("Can type in information", () => {
    describe("Add first name into input field", () => {
        it("Should be able to type into input field", () => {
            cy.get("#firstName")
            .type("testing")
        })})
    describe("Add first name into input field", () => {
        it("Should be able to type into input field", () => {
            cy.get("#lastName")
            .type("the")
        })})
    describe("Add first name into input field", () => {
        it("Should be able to type into input field", () => {
            cy.get("#email")
            .type("thing@here.co")
        })})
    describe("Add first name into input field", () => {
        it("Should be able to type into input field", () => {
            cy.get("#username")
            .type("user")
        })})
    describe("Add first name into input field", () => {
        it("Should be able to type into input field", () => {
            cy.get("#password")
            .type("pass")
        })})
})
