export default class NewPage {
  constructor() {
    this._path = "/new"
  }

  path() { return this._path }

  toRoute() {
    const { _path: path } = this

    return {
      path,

      getComponents: (location, callback) => {
        require.ensure([], () =>
          callback(null, {
            content: require("components/NewContent").default
          })
        )
      }
    }
  }
}
