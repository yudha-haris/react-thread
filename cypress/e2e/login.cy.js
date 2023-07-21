/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login");
  });

  it("should display login page correctly", () => {
    // verify items
    cy.get('input[placeholder="Masukkan email"]').should("be.visible");
    cy.get('input[placeholder="Masukkan password"]').should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });

  it("should display alert when email is empty", () => {
    // actions
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.get('div[role="alert"]')
      .should("be.visible")
      .should("have.text", '"email" is not allowed to be empty');
  });

  it("should display alert when password is empty", () => {
    // actions
    cy.get('input[placeholder="Masukkan email"]').type("user@mail.com");
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.get('div[role="alert"]')
      .should("be.visible")
      .should("have.text", '"password" is not allowed to be empty');
  });

  it("should display alert when username and password are wrong", () => {
    // actions
    cy.get('input[placeholder="Masukkan email"]').type("yudha@dicoding.com");
    cy.get('input[placeholder="Masukkan password"]').type("password");
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.get("button").contains("Logout").should("be.visible");
  });
});
