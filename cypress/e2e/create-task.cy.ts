describe("Home Page", () => {
  it("should be create a new task", () => {
    cy.visit("http://192.168.56.1:3000/todo"); // Visit the Next.js app's local URL

    cy.get(".fixed").click(); // Click the PlusIcon component

    cy.get("input").eq(1).type("Test Todo"); // Type "Test Todo" in the input field

    cy.contains("To Do").click(); // Click the "To Do" button

    cy.get("span").contains("In Progress").click(); // Click the "In Progress" button

    cy.get("textarea").type("Test Todo 2"); // Type "Test Todo 2" in the input field

    cy.contains("Submit").click()
  });
});
