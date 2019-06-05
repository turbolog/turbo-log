describe("Landing page successfully loaded", () => {
  it("Should load the page", () => {
    cy.visit("http://localhost:3000/#/");
  });
});
describe("Login page successfully loaded", () => {
  it("Should load the login view", () => {
    cy.visit("http://localhost:3000/#/login");
  });
});
describe("Register page successfully loaded", () => {
  it("Should load the register view", () => {
    cy.visit("http://localhost:3000/#/register");
  });
});
describe("Garage page successfully loaded", () => {
  it("Should load the multi garage view", () => {
    cy.visit("http://localhost:3000/#/multigarage");
  });
});
describe("Add vehicle page successfully loaded", () => {
  it("Should load the add vehicle form", () => {
    cy.visit("http://localhost:3000/#/addvehicle");
  });
});
