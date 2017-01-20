export default class NewPage {
  path() {
    return "/new"
  }

  toRoute() {
    const path = this.path()

    return {
      path,

      getComponents: (location, callback) => {
        require.ensure([], () => {
          const content = require("components/NewContent")

          callback(null, { content: content.default })
        })
      }
    }
  }
}
