import { useState } from 'react'
import PropTypes from 'prop-types'

import classes from './InputForm.module.scss'

function InputForm({ add }) {
  const [input, setInput] = useState('')

  const changeInputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (input.trim().length === 0) return
    add(input)

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

InputForm.propTypes = {
  add: PropTypes.func,
}

export default InputForm
