describe("Home Page", () => {
  it("should be update task", () => {
    cy.visit("http://192.168.56.1:3000/todo"); // Visit the Next.js app's local URL

    cy.get("input").type("React")

    cy.contains("Filter").click()

    cy.get("span").contains("In Process").click()
  });
});
