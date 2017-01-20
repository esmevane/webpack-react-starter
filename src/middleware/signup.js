const jsonBody = type => id => data => (
  { type, id: id, data }
)

module.exports = app => {
  return (request, response, next) => {
    const users = app.service("users")
    const { email, password } = request.body

    users
      .create({ email, password })
      .then(({ email }) => response.json(jsonBody({ email })))
      .catch(next)
  }
}
