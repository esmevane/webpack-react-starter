/* eslint-env node, mocha */

import { expect } from "chai"
import { RouteMap, Route, route } from "./mapper"

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

  describe("#toRouteNode", () => {
    it("maps keys to different key names", () => {
      const path = "path"
      const component = "Component"
      const route = new Route({ path: "new" })
      const routes = [ route ]
      const index = "AnIndexComponent"
      const subject = new Route({ path, component, routes, index })

      expect(subject.toRouteNode()).to.eql({
        path,
        component,
        childRoutes: [ route.toRouteNode() ],
        indexRoute: index
      })
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

    yield homePage.withRoutes(function* () { yield newPage })
  }

  const subject = new RouteMap(routes)

  describe("#toRouteTree", () => {
    it("creates a parsing ready route tree", () => {
      const list = [
        {
          path: "/",
          component: "components/AppContainer",
          indexRoute: {
            header: "components/Header",
            sidebar: "components/Sidebar",
            content: "components/HomeContent"
          },
          childRoutes: [
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

      expect(subject.toRouteTree()).to.eql(list)
    })
  })

  describe("#toRawPaths", () => {
    it("creates a list of routes", () => {
      const list = [ "/", "/new" ]

      expect(subject.toRawPaths()).to.eql(list)
    })
  })

  describe("#toRouteManifest", () => {
    it("creates a table of named routes", () => {
      const expectation = {
        root: "/",
        new: "/new"
      }

      expect(subject.toRouteManifest()).to.eql(expectation)
    })
  })

  describe("#toPaths", () => {
    it("creates a function for every route", () => {
      expect(subject.toPaths()).to.have.keys("root", "new")
    })
  })


})
