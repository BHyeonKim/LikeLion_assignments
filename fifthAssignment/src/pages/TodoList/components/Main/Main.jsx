import PropTypes from 'prop-types'

import classes from './Main.module.scss'

import InputFormContainer from '../../containers/InputFormContainer'
import TodoItemContainer from '../../containers/TodoItemContainer'

function Main({ todos, del }) {
  const itemDeleteHandler = (item) => {
    del(item)
  }

  return (
    <div className={classes.main}>
      <h1 className={classes.main__title}>What&apos;s up, Joy!</h1>
      <h2 className={classes.main__category}>categories</h2>
      <div className={classes.slider}>
        {/* <div className={classes.slider__content}>슬라이더</div> */}
        <InputFormContainer />
      </div>
      <h2 className={classes.main__category}>Today&apos;s Tasks</h2>
      <div className={classes.list}>
        <ul className={classes.list__content}>
          {todos.map((item) => (
            <TodoItemContainer item={item} onDelete={itemDeleteHandler} />
          ))}
        </ul>
      </div>
    </div>
  )
}

Main.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ),
  del: PropTypes.func.isRequired,
}

export default Main
