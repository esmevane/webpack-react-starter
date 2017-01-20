import feathers from "feathers/client"
import authentication from "feathers-authentication/client"
import socketio from "feathers-socketio/client"
import hooks from "feathers-hooks"
import io from "socket.io-client"

const DefaultHost = "//localhost:9001"

const buildConnection = (host = DefaultHost) => {
  const socket = io(host)

  const app = feathers()
    .configure(socketio(socket))
    .configure(hooks())
    .configure(authentication({ storage: window.localStorage }))

  return app
}

export default buildConnection
