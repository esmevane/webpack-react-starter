import { join } from "path"
import camelCase from "lodash/camelCase"

// How does this feel?  Is there a better approach?
//
// The three goals:
// - I should be able to get paths out of a map.
// - I should be able to draw a React Router tree out of a map.
// - I should only need to redo a single map definition to change routes.
//

class RouteMap {
  constructor(routes) {
    this.routes = routes
  }

  toPaths() {
    const manifest = this.toRouteManifest()
    const paths = {}

    for (let key in manifest) paths[key] = () => manifest[key]

    return paths
  }

  toRawPaths() {
    const reducer = (list, { path, childRoutes }) => {
      const childPaths = childRoutes ? childRoutes.reduce(reducer, []) : []
      const fullPaths = childPaths.map(item => join(path, item))

      return [ ...list, path, ...fullPaths ]
    }

    return this.toRouteTree().reduce(reducer, [])
  }

  toRouteManifest() {
    const reducer = (table, path) => {
      const name = path === "/" ? "root" : camelCase(path)

      return { ...table, [name]: path }
    }
    return this.toRawPaths().reduce(reducer, {})
  }

  toRouteTree() {
    return [ ...this.routes() ].map(route => route.toRouteNode())
  }

  toAsyncRoutes(context) {
    return [ ...this.routes() ].map(route => route.toAsyncRouteNode(context))
  }

}

class AsyncRouteNode {
  constructor({ component, index, path, routes }) {
    const toNode = item =>
      item instanceof Route ?
        item.toAsyncRouteNode() :
        item

    const ensureArray = list => Array.isArray(list) ? list : [ ...list() ]
    const children = ensureArray(routes || []).map(toNode)

    this.component = component
    this.index = index
    this.path = path
    this.children = children
  }

  toObject(context) {
    const { path } = this

    return {
      path,
      [ this._getComponentKey() ]: this._getAsyncFetch(context),
      ...this._getChildRoutes(context),
      ...this._getIndexRoute(context)
    }
  }

  _getAsyncFetch(context) {
    const { component } = this

    const fetchComponent = (location, callback) =>
      context.ensure([], () => callback(null, context(component).default))

    const fetchComponents = (location, callback) =>
      context.ensure([], () => {
        const components = {}

        for (let key in component) {
          components[key] = context(component[key]).default
        }

        callback(null, components)
      })

    const fetcher =
      typeof component === "object" ?
        fetchComponents :
        fetchComponent

    return fetcher()
  }

  _getComponentKey() {
    const { component } = this

    return typeof component === "object" ? "getComponents" : "getComponent"
  }

  _getChildRoutes() {
    const { children: childRoutes } = this

    return childRoutes && childRoutes.length > 0 ? { childRoutes } : {}
  }

  _getIndexRoute() {
    const { index: indexRoute } = this

    return indexRoute ? { indexRoute } : {}
  }
}

class RouteNode {
  constructor({ component, index, path, routes }) {
    const toNode = item => item instanceof Route ? item.toRouteNode() : item
    const ensureArray = list => Array.isArray(list) ? list : [ ...list() ]
    const children = ensureArray(routes || []).map(toNode)

    this.component = component
    this.index = index
    this.path = path
    this.children = children
  }

  toObject() {
    const { component, path } = this

    return {
      path,
      [ this._getComponentKey() ]: component,
      ...this._getChildRoutes(),
      ...this._getIndexRoute()
    }
  }

  _getComponentKey() {
    const { component } = this

    return typeof component === "object" ? "components" : "component"
  }

  _getChildRoutes() {
    const { children: childRoutes } = this

    return childRoutes && childRoutes.length > 0 ? { childRoutes } : {}
  }

  _getIndexRoute() {
    const { index: indexRoute } = this

    return indexRoute ? { indexRoute } : {}
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

  toRouteNode() {
    return new RouteNode(this).toObject()
  }

  toAsyncRouteNode(context) {
    return new AsyncRouteNode(this).toObject(context)
  }

  toObject() {
    const { component, index, path, routes: unmadeRoutes } = this

    const toObject = item => item instanceof Route ? item.toObject() : item
    const marshal = list => Array.isArray(list) ? list : [ ...list() ]
    const routes = marshal(unmadeRoutes || []).map(toObject)

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

export { RouteMap, Route, route }
