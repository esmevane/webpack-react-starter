import { Toggle } from "./actions"

const active = (initialState = true, action) => {
  switch (action.type) {
    case Toggle:
      return !initialState
    default:
      return initialState
  }
}

export default { active }
