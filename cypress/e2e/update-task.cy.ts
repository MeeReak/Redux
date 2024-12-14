describe("Home Page", () => {
  it("should be update task", () => {
    cy.visit("http://192.168.56.1:3000/todo"); // Visit the Next.js app's local URL

    cy.get('#1').click()

    cy.get('input').eq(1).clear().type("Learn Cypress")
    
    cy.contains("To Do").click();

    cy.get('span').contains('Done').click()

    cy.get("textarea").clear().type("Learn Cypress with TypeScript");

    cy.contains("Update").click()

  });
});
