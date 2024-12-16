import { SelectDemo } from "@/components/Select";

describe("Select.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<SelectDemo />);

    cy.get("button").click();


  });
});
