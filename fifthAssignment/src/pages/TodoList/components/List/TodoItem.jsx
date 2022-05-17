import PropTypes from 'prop-types'

import classes from './TodoItem.module.scss'

import { ReactComponent as Check } from '../svgs/check.svg'
import { useState } from 'react'

function TodoItem({ item, toggle, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(item.todo)

  const textChangeHandler = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

  const editingHandler = () => {
    setIsEditing((prev) => !prev)
  }

  const checkHandler = () => {
    toggle(item)
  }

  const clickDeleteHandler = () => {
    onDelete(item)
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
        <Check />
      </button>
      <p
        className={`${classes.item__todo} ${item.checked ? '' : classes['notChecked--text']}`}
        onClick={editingHandler}
        role='presentation'
      >
        {!item.checked && isEditing ? (
          <form type='submit'>
            <input type='text' className={classes['item__todo--input']} onChange={textChangeHandler} value={input} />
            <button type='button' className={classes.item__editBtn}>
              Edit
            </button>
          </form>
        ) : (
          input
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
    todo: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  toggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TodoItem
