import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Mythumb from '~/assets/images/thumb.png';
import Mylogo from '~/assets/images/logo.png';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('first-Color')}></div>
      <div className={cx('container')}>
        <div className={cx('box-container')}>
          <div className={cx('left-side')}>
            <form className={cx('form')}>
              <h1 className={cx('form-title')}>Sign in to your account</h1>
              <div className={cx('input-container')}>
                <input placeholder="Enter email" type="email"></input>
              </div>
              <div className={cx('input-container')}>
                <input placeholder="Enter password" type="password"></input>
              </div>
              <button className={cx('submit')} type="submit">
                Sign in
              </button>

              <p className={cx('signup-link')}>
                No account?
                <Link to={config.routes.register}> Sign up</Link>
              </p>
              <p className={cx('forget-password')}>Forget your password?</p>
            </form>
          </div>
          <div className={cx('right-side')}>
            <div className={cx('wrapper-img')}>
              <img src={Mythumb} atl="mythumb" className={cx('thumb-img')} />
              <img src={Mylogo} atl="mylogo" className={cx('logo-img')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
