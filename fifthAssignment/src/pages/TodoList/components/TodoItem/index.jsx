import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todosState } from '../../../../recoil/atom'
import PropTypes from 'prop-types'

import classes from './TodoItem.module.scss'

import { CheckIcon } from '../../../../assets/svgs'

function TodoItem({ item }) {
  const [todos, setTodos] = useRecoilState(todosState)
  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(item.text)

  const textChangeHandler = (e) => {
    setInput(e.target.value)
  }

  const editingHandler = () => {
    setIsEditing((prev) => !prev)
  }

  const checkHandler = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === item.id) return { ...item, checked: !item.checked }
        return { ...todo }
      })
    )
  }

  const clickDeleteHandler = () => {
    setTodos(todos.filter((todo) => todo !== item))
  }

  return (
    // Non-interactive elements should not be assigned mouse or keyboard event listeners. <=린터 에러
    // https://issueantenna.com/repo/nala723/The-Dreamer/issues/98
    // <li className={classes.item} role='presentation' onClick={checkHandler}>
    <li className={classes.item}>
      <button
        type='button'
        className={`${classes.item__checkBtn} ${item.checked ? '' : classes['notChecked--btn']}`}
        onClick={checkHandler}
      >
        <CheckIcon />
      </button>
      <p
        className={`${classes.item__todo} ${item.checked ? '' : classes['notChecked--text']}`}
        onClick={editingHandler}
        role='presentation'
      >
        {!item.checked && isEditing ? (
          <form type='submit'>
            <input
              type='text'
              className={classes['item__todo--input']}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              onChange={textChangeHandler}
              value={input}
            />
            <button type='button' className={classes.item__editBtn}>
              Edit
            </button>
          </form>
        ) : (
          item.text
        )}
      </p>
      {item.checked && (
        <button type='button' className={classes.item__deleteBtn} onClick={clickDeleteHandler}>
          delete
        </button>
      )}
    </li>
  )
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
}

export default TodoItem
