import { useCallback } from 'react'

import { useDispatch } from 'react-redux'
import { addTodo } from '../../../redux/actions'

import InputForm from '../components/InputForm/InputForm'

export default function InputFormContainer() {
  const dispatch = useDispatch()
  const add = useCallback(
    (text) => {
      dispatch(addTodo(text))
    },
    [dispatch]
  )

  return <InputForm add={add} />
}
