/// <reference types="cypress" />
it("Open the Url", () => {
  cy.visit(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );
});
it("Login into the application", () => {
  cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
  cy.get('[id="input-password"]').type("lambdatest");
  cy.get('[type="submit"]').eq(0).click();
});
it("Click on Lambdatest Logo", () => {
  cy.get('[title="Poco Electro"]').click();
  cy.wait(5000);
});
it("Scroll to bottom and Click on Product Verify prooduct 'iPod Touch' ", () => {
  cy.get('[title="Nikon D300"]').eq(0).scrollIntoView().click();
});
