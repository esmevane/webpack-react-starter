const newPage = {
  path: () => `/${newPage.toRoute().path}`,
  toRoute: () => ({
    path: "new",
    getComponents: (location, callback) =>
      require.ensure([], () =>
        callback(null, {
          content: require("components/NewContent").default
        })
      )
  })
}

const homePage = {
  path: () => homePage.toRoute().path,
  toRoute: () => ({
    path: "/",
    getChildRoutes: (location, callback) => {
      callback(null, [ newPage ])
    },

    getComponent: (location, callback) =>
      require.ensure([], () =>
        callback(null, require("components/AppContainer").default)
      )
  })
}

export {
  homePage,
  newPage
}
