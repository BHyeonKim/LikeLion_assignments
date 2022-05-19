import { Provider } from 'react-redux'
import store from '../../redux/store'

import classes from './TodoList.module.scss'

import NavigationBar from './components/Navbar/NavigationBar'
import MainContainer from './containers/MainContainer'
import PlusBtn from './components/PlusBtn/PlusBtn'

function TodoList() {
  return (
    <div className={classes.wrapper}>
      <Provider store={store}>
        <NavigationBar store={store} />
        <MainContainer />
        <PlusBtn />
      </Provider>
    </div>
  )
}

export default TodoList
