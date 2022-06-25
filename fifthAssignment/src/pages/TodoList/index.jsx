import NavigationBar from './components/Navbar'
import Main from './components/Main'
import PlusBtn from './components/PlusBtn'

import classes from './TodoList.module.scss'

function TodoList() {
  return (
    <div className={classes.wrapper}>
      <NavigationBar />
      <Main />
      <PlusBtn />
    </div>
  )
}

export default TodoList
