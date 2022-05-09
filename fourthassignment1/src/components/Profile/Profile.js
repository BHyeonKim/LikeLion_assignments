import classes from './Profile.module.scss';

import { Html5, Css, Js, React, Question, Nextjs } from 'assets/svgs/index';

function Profile() {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__img}>
        <img alt='profile' src='/profile.jpg' className={classes.img} />
      </div>
      <section className={classes.profile__content}>
        <table className={classes['profile__content--table']}>
          <tr>
            <td>
              <div className={classes['profile__content--icon']}>
                <Html5 className={`${classes.img} ${classes.shadow}`} />
              </div>
            </td>
            <td>
              <div className={classes['profile__content--icon']}>
                <Css
                  className={`${classes.img} ${classes.shadow}`}
                  style={{ width: 'inherit', height: 'inherit' }}
                />
              </div>
            </td>
            <td>
              <div className={classes['profile__content--icon']}>
                <Js className={`${classes.img} ${classes.shadow}`} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes['profile__content--icon']}>
                <React className={`${classes.img} ${classes.shadow}`} />
              </div>
            </td>
            <td>
              <div className={classes['profile__content--icon']}>
                <Nextjs className={`${classes.img} ${classes.shadow}`} />
              </div>
            </td>
            <td>
              <div className={classes['profile__content--icon']}>
                <Question className={`${classes.img} ${classes.shadow}`} />
              </div>
            </td>
          </tr>
        </table>
        <h1>프론트엔드를 공부하는 대학생</h1>
      </section>
    </div>
  );
}

export default Profile;
