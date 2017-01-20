/* eslint-env node, mocha */

import NewPage from "pages/NewPage"
import { expect } from "chai"

describe("NewPage", () => {
  const page = new NewPage()

  describe("#path", () => {
    it("is /new", () => {
      expect(page.path()).to.eql("/new")
    })
  })

  describe("#toRoute", () => {
    it("supplies path, getComponents", () => {
      expect(page.toRoute()).to.have.keys(
        "path",
        "getComponents"
      )
    })
  })

})
