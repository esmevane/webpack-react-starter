import NewPage from "./index";
import { expect } from "chai";

describe("NewPage", () => {
  const page = new NewPage();

  describe("#path", () => {
    it("is /new", () => {
      expect(page.path()).to.eql("/new");
    });
  });

  it("equals itself", () => {
    expect(new NewPage()).to.eql(new NewPage());
  });

});
