import NewPage from "pages/NewPage";

export default class HomePage implements Page {
  path() {
    return "/";
  }

  toRoute() {
    const path = this.path();
    const newPage = new NewPage();

    return {
      path,
      getChildRoutes: (location, callback) => {
        callback(null, [ newPage.toRoute() ]);
      },

      getComponent: (location, callback) => {
        require.ensure([], () => {
          const container: any = require("components/AppContainer");

          callback(null, container.default);
        });
      }
    };
  }
}
