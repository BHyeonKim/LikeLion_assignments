import { ADD_TODO, DELETE_TODO, TOGGLE_CHECK } from './actions'

const initialState = []

// eslint-disable-next-line default-param-last
export function todos(prevState = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...prevState, action.payload]
    case DELETE_TODO:
      return [...prevState].filter((item) => item !== action.payload)
    case TOGGLE_CHECK:
      return [...prevState].map((item) => (item === action.payload ? { ...item, checked: !item.checked } : item))
    default:
      return prevState
  }
}
