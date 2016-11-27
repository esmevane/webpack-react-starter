/* eslint-env node, mocha */
import { expect } from "chai"

// How does this feel?  Is there a better approach?
//
// const map = mapper(function* () {
//
//   const normalChrome = function* () {
//     yield map("header").to("components/Header")
//     yield map("sidebar").to("components/Sidebar")
//     yield map("content").to("components/HomeContent")
//   }
//
//   yield root("components/AppContainer").with(function* () {
//
//     yield route("new").with(function* () {
//       yield normalChrome
//       yield map("content").to("components/NewContent")
//     })
//
//     yield index(function* () { yield normalChrome })
//
//   })
//
// })
//
// The three goals:
// - I should be able to get paths out of a map.
// - I should be able to draw a React Router tree out of a map.
// - I should only need to redo a single map definition to change routes.
//
// const list = [
//   {
//     path: "/",
//     name: "root",
//     component: "components/AppContainer",
//     index: {
//       header: "components/Header",
//       sidebar: "components/Sidebar",
//       content: "components/HomeContent"
//     },
//     children: [
//       {
//         path: "new",
//         name: "new", // If this is omitted, it should be made from path
//         components: {
//           header: "components/Header",
//           sidebar: "components/Sidebar",
//           content: "components/NewContent"
//         }
//       }
//     ]
//   }
// ]
//
// expect(new RouteMap(map).toRawRoutes()).to.eql(list)
//

const root = component => ({ type: "ROOT", component })
const route = path => ({ type: "ROUTE", path })

describe("root", () => {

  it("returns an object of type 'ROOT'", () => {
    expect(root("").type).to.eql("ROOT")
  })

  it("stores the given argument in the component property", () => {
    expect(root("Container").component).to.eql("Container")
  })

})

describe("route", () => {

  it("returns an object of type 'ROUTE'", () => {
    expect(route("").type).to.eql("ROUTE")
  })

  it("stores the given argument in the path property", () => {
    expect(route("new").path).to.eql("new")
  })

})
