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

describe("Deletes item from List", () => {
    it("Can Click on the delete button", () => {
        cy.get("button[name='world-domination-delete']")
        .click()
    })
    it("deleted 'World Domination' is deleted from the page", () => {
        cy.contains("World Domination").should("not.exist")
    })
})

describe("Navagation", () => {
    it("Should navigate to checked", () => {
        cy.contains("Checked").click
        cy.url().should("include","./checked")
    })

})