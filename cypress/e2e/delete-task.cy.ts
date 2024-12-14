describe("Home Page", () => {
  it("should be delete the second task", () => {
    cy.visit("http://192.168.56.1:3000/todo"); // Visit the Next.js app's local URL

    cy.get(".lucide").eq(2).click();

  });
});
