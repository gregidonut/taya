describe("postCRUD", () => {
  beforeEach(() => {
    cy.signInAsUser();
    cy.viewport("iphone-6");
  });
  it("sign up", () => {
    cy.visit("/home");
    cy.get("[data-cy='newPostTextArea']");
  });
});
