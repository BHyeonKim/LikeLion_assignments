export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_CHECK = 'TOGGLE_CHECK'

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: { todo, id: Date.now(), checked: false },
  }
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    payload: todo,
  }
}

export function toggleCheck(todo) {
  return {
    type: TOGGLE_CHECK,
    payload: todo,
  }
}
