import { useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../../../redux/actions'

import Main from '../components/Main/Main'

function MainContainer() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const del = useCallback(
    (todo) => {
      dispatch(deleteTodo(todo))
    },
    [dispatch]
  )

  return <Main todos={todos} del={del} />
}

export default MainContainer
