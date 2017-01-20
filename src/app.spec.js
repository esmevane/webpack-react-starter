/* eslint no-undef: "off"*/

const assert = require("assert")
const request = require("request")
const app = require("../src/app")

describe("Feathers application tests", () => {

  before(done => {
    this.server = app.listen(3030)
    this.server.once("listening", () => done())
  })

  after(done => this.server.close(done))

  it("starts and shows the index page", done => {
    request("http://localhost:3030", (error, response, body) => {
      assert.ok(body.indexOf("<html>") !== -1)
      done(error)
    })
  })

  describe("404", () => {
    it("shows a 404 HTML page", done => {
      request({
        url: "http://localhost:3030/path/to/nowhere",
        headers: {
          "Accept": "text/html"
        }
      }, (error, response, body) => {
        assert.equal(response.statusCode, 404)
        assert.ok(body.indexOf("<html>") !== -1)
        done(error)
      })
    })

    it("shows a 404 JSON erroror without stack trace", done => {
      request({
        url: "http://localhost:3030/path/to/nowhere",
        json: true
      }, (error, response, body) => {
        assert.equal(response.statusCode, 404)
        assert.equal(body.code, 404)
        assert.equal(body.message, "Page not found")
        assert.equal(body.name, "NotFound")
        done(error)
      })
    })
  })
})
