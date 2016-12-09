import HomePage from "pages/HomePage";
import NewPage from "pages/NewPage";
import { expect } from "chai";

describe("HomePage", () => {
  const page = new HomePage();

  describe("#path", () => {
    it("is /", () => {
      expect(page.path()).to.eql("/");
    });
  });

  describe("#toRoute", () => {
    it("supplies path, getComponent and getChildRoutes", () => {
      expect(page.toRoute()).to.have.keys(
        "path",
        "getComponent",
        "getChildRoutes"
      );
    });
  });

});
