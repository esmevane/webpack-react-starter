import HomePage from "./index";
import NewPage from "pages/NewPage";
import { expect } from "chai";

describe("HomePage", () => {
  const page = new HomePage();

  describe("#path", () => {
    it("is /", () => {
      expect(page.path()).to.eql("/");
    });
  });

  // describe("#toRoute", () => {
  //   let wasCalledWith;
  //
  //   const routable = page.toRoute();
  //   const callback = (error, result) => wasCalledWith = result;
  //   const expectation = [new NewPage().toRoute()];
  //
  //   it("supplies .getComponent with the AppContainer", () => {
  //     routable.getComponent({}, callback);
  //     expect(wasCalledWith).to.eql(expectation);
  //   });
  // });
  //
});
