/* eslint-disable jsx-a11y/anchor-is-valid */
import { Burger } from 'assets/svgs';
import classes from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={classes.navigation}>
      <div className={classes.navigation__menu}>
        <a type='button'>
          <Burger style={{ width: '100%', height: '100%' }} />
        </a>
      </div>
      <ul className={classes.navigation__links}>
        <li className={classes['navigation__links--link']}>
          <a type='button'>Home</a>
        </li>
        <li className={classes['navigation__links--link']}>
          <a type='button'>Posts</a>
        </li>
        <li className={classes['navigation__links--link']}>
          <a type='button'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
