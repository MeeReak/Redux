describe("Home Page", () => {
  it("should load the homepage correctly", () => {
    cy.visit("http://localhost:3000"); // Visit the Next.js app's local URL

    // Check if the page contains a specific text
    cy.contains("Welcome to Next.js!");

    // Example: Check if a button exists on the page
    cy.get("button").should("have.length", 1);
  });
});
