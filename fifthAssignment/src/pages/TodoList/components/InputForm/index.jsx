import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todosState } from '../../../../recoil/atom'

import classes from './InputForm.module.scss'

function InputForm() {
  const [todos, setTodos] = useRecoilState(todosState)
  const [input, setInput] = useState('')

  const changeInputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (input.trim().length === 0) return

    setTodos([...todos, { text: input, id: Date.now(), checked: false }])
    setInput('')
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input type='text' className={classes.form__input} onChange={changeInputHandler} value={input} />
      <button type='submit' className={classes.form__btn}>
        추가
      </button>
    </form>
  )
}

export default InputForm
