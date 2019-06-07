
describe("forum page successfully loaded", () => {
    it("Should load the page", () => {
      cy.visit("http://localhost:3000/#/forum");
    });
  });

  describe("searching works", () => {
    it("Should search", () => {
      cy.visit("http://localhost:3000/#/forum");
      cy.focused()
       
    });
  });

  describe("it accept input", () => {
    it("Should type", () => {
        const typetext = "how hot is too hot" 
      cy.visit("http://localhost:3000/#/forum");
      cy.get("#outlined-search")
        .type(typetext)
       
    });
  });

  describe("near-me page successfully loaded", () => {
    it("Should load the page", () => {
      cy.visit("http://localhost:3000/#/near-me");
    });
  });

  describe("gettin lacation page successfully loaded", () => {
    it("Should load the page", () => {
      cy.visit("http://localhost:3000/#/getting-location");
    });
  });

  