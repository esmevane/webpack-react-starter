/* eslint-env node, mocha */
import { expect } from "chai"

// How does this feel?  Is there a better approach?
//
// The three goals:
// - I should be able to get paths out of a map.
// - I should be able to draw a React Router tree out of a map.
// - I should only need to redo a single map definition to change routes.
//

const routes = function* () {
  const normalChrome = {
    header: "components/Header",
    sidebar: "components/Sidebar",
    content: "components/HomeContent"
  }

  const homePage =
    route("/")
      .to("components/AppContainer")
      .withIndex(normalChrome)

  const newPage =
    route("new")
      .to({ ...normalChrome, content: "components/NewContent" })

  yield homePage.withRoutes(
    function* () {
      yield newPage
    }
  )
}

const list = [
  {
    path: "/",
    component: "components/AppContainer",
    index: {
      header: "components/Header",
      sidebar: "components/Sidebar",
      content: "components/HomeContent"
    },
    children: [
      {
        path: "new",
        components: {
          header: "components/Header",
          sidebar: "components/Sidebar",
          content: "components/NewContent"
        }
      }
    ]
  }
]

class RouteMap {
  constructor(routes) {
    this.routes = routes
  }

  toRawRoutes() {
    return [ ...this.routes() ].map(route => route.toObject())
  }
}


class Route {
  constructor({ component, index, path, routes }) {
    this.component = component
    this.index = index
    this.path = path
    this.routes = routes
  }

  to(component) {
    const currentState = this.toObject()

    return new Route({ ...currentState, component })
  }

  toObject() {
    const { component, index, path, routes: unmadeRoutes } = this
    const routes = (unmadeRoutes || []).map(
      route => route instanceof Route ? route.toObject() : route
    )

    return { component, index, path, routes }
  }

  withIndex(index) {
    const currentState = this.toObject()

    return new Route({ ...currentState, index })
  }

  withRoutes(routes) {
    const currentState = this.toObject()

    return new Route({ ...currentState, routes })
  }
}

const route = path => new Route({ path })

describe("Route", () => {

  describe("initialization", () => {
    it("accepts parameters at creation time", () => {
      const parameters = {
        path: "path",
        component: "Component",
        routes: [],
        index: "AnIndexComponent"
      }

      const subject = new Route(parameters)

      expect(subject.toObject()).to.eql(parameters)
    })
  })

  describe("#to", () => {
    it("changes the component property", () => {
      const parameters = { path: "path", component: "Component" }
      const subject = new Route(parameters).to("NewComponent")

      expect(subject.component).to.eql("NewComponent")
    })
  })

  describe("#withIndex", () => {
    it("changes the index property", () => {
      const parameters = { index: "OldIndexComponent" }
      const subject = new Route(parameters).withIndex("NewIndexComponent")

      expect(subject.index).to.eql("NewIndexComponent")
    })
  })

  describe("#withRoutes", () => {
    it("changes the routes property", () => {
      const parameters = { routes: [] }
      const newRoute = new Route({ path: "stuff" })
      const subject = new Route(parameters).withRoutes([ newRoute ])

      expect(subject.routes).to.eql([ newRoute ])
    })
  })

})

describe("route", () => {

  it("creates an object with a path", () => {
    expect(route("path").path).to.eql("path")
  })

  it("can be chained to create complex objects", () => {
    const subject = route("path").to("Component").toObject()

    expect(subject).to.eql({
      component: "Component",
      index: undefined,
      path: "path",
      routes: []
    })
  })

  it("is immutable", () => {
    const original = route("path")
    const subject = original.to("Component")

    expect(original).not.to.eql(subject)
  })

})

describe("A big old integration test", () => {
  it("is at least a failure somehow", () => {
    expect(new RouteMap(routes).toRawRoutes()).to.eql(list)
  })
})
