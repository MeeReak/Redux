import { Input } from "@/components/ui/input";

describe("Input.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<Input />);

    cy.get("input").type("Hello World");
  });
});
