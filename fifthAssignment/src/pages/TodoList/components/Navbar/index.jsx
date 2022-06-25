import classes from './NavigationBar.module.scss'

import { HambergerIcon, SearchIcon, BellIcon } from '../../../../assets/svgs'

function NavigationBar() {
  return (
    <nav className={classes.navigationBar}>
      <div className={classes.navigationBar__button}>
        <HambergerIcon />
      </div>
      <div className={classes.navigationBar__rightitems}>
        <button
          type='button'
          className={`${classes.navigationBar__button} ${classes['navigationBar__button--search']}`}
        >
          <SearchIcon />
        </button>
        <button type='button' className={`${classes.navigationBar__button} ${classes['navigationBar__button--bell']}`}>
          <BellIcon />
        </button>
      </div>
    </nav>
  )
}

export default NavigationBar
