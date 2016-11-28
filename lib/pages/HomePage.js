import NewPage from "pages/NewPage"

export default class HomePage {
  constructor() {
    this._path = "/"
  }

  path() { return this._path }

  toRoute() {
    const { _path: path } = this
    const newPage = new NewPage()

    return {
      path,
      getChildRoutes: (location, callback) => {
        callback(null, [ newPage.toRoute() ])
      },

      getComponent: (location, callback) => {
        require.ensure([], () =>
          callback(null, require("components/AppContainer").default)
        )
      }
    }
  }
}
