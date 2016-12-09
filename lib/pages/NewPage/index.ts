import { Page } from "pages/Page";

export default class NewPage implements Page {
  path() {
    return "/new";
  }

  toRoute() {
    const path = this.path();

    return {
      path,

      getComponents: (location, callback) => {
        require.ensure([], () => {
          const content: any = require("components/NewContent");

          callback(null, { content: content.default });
        });
      }
    };
  }
}
