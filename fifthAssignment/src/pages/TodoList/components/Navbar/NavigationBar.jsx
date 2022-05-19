import classes from './NavigationBar.module.scss'

import { ReactComponent as Hamberger } from '../svgs/hamberger.svg'
import { ReactComponent as Search } from '../svgs/search.svg'
import { ReactComponent as Bell } from '../svgs/bell.svg'

function NavigationBar() {
  return (
    <nav className={classes.navigationBar}>
      <div className={classes.navigationBar__button}>
        <Hamberger />
      </div>
      <div className={classes.navigationBar__rightitems}>
        <button
          type='button'
          className={`${classes.navigationBar__button} ${classes['navigationBar__button--search']}`}
        >
          <Search />
        </button>
        <button type='button' className={`${classes.navigationBar__button} ${classes['navigationBar__button--bell']}`}>
          <Bell />
        </button>
      </div>
    </nav>
  )
}

export default NavigationBar
