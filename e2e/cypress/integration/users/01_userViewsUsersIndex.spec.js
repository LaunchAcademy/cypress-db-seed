/// <reference types="cypress" />
// import { makeFakeUser } from "../../../../server/src/db/factories/User"

context("Users Index", () => {
  let persistedUser = null
  beforeEach(() => {
    cy.task("db:truncate", "User")
    cy.request("POST", "api/v1/test/user", { firstName: "Tim Test" }).then(
      (data) => (persistedUser = data.body)
    )
    cy.visit("/")
  })

  it("has a heading", () => {
    cy.get("h1").should("have.text", "Our App's Users")
  })

  it("lists all users", () => {
    cy.get(".users")
      .find("li")
      .first()
      .should("have.text", persistedUser.firstName + " " + persistedUser.lastName)
  })
})
