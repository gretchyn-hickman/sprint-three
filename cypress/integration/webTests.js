describe("Pizza Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get("input[name=name]");
  const toppingsInput = () => cy.get(".topping");
  const submitButton = () => cy.get(`button[id="order-button"]`);
  const submittedPizza = () => cy.get("#your-pizza");

  it("Can type in the name input", () => {
    nameInput()
      .should("have.value", "")
      .type("Anne")
      .should("have.value", "Anne");
  });

  it("Has multiple selectable toppings", () => {
    toppingsInput().should("have.length", 4);
  });

  it("Can be submitted", () => {
    nameInput().type("Darth Vader");
    submitButton().click();
    submittedPizza().contains("Darth Vader");
  });
});
