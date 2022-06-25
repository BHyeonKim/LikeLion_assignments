import { useRecoilValue } from 'recoil'
import { todosState } from '../../../../recoil/atom'

import InputForm from '../InputForm'
import TodoItem from '../TodoItem'

import classes from './Main.module.scss'

function Main() {
  const todos = useRecoilValue(todosState)

  return (
    <div className={classes.main}>
      <h1 className={classes.main__title}>What&apos;s up, Joy!</h1>
      <h2 className={classes.main__category}>categories</h2>
      <div className={classes.slider}>
        <InputForm />
      </div>
      <h2 className={classes.main__category}>Today&apos;s Tasks</h2>
      <div className={classes.list}>
        <ul className={classes.list__content}>
          {todos.map((todo) => (
            <TodoItem item={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Main
