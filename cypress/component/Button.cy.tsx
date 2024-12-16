import { Button } from "@/components/ui/button";

describe("Button.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<Button>Click Me</Button>);

    cy.get("button").click();
  });
});
