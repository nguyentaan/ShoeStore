import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Mythumb from '~/assets/images/thumb.png';
import Mylogo from '~/assets/images/logo.png';

const cx = classNames.bind(styles);

function Register() {
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
              <div className={cx('split-content')}>
                <div className={cx('w-content')}>
                  <input placeholder="First name" type="text"></input>
                </div>
                <div className={cx('w-content')}>
                  <input placeholder="Last name" type="text"></input>
                </div>
              </div>
              <div className={cx('input-container')}>
                <input placeholder="Date of Birth" type="date"></input>
              </div>
              <div className={cx('split1-content')}>
                <div className={cx('checkbox-content')}>
                  <input type="checkbox"></input>
                  <span>Male</span>
                </div>
                <div className={cx('checkbox-content')}>
                  <input type="checkbox"></input>
                  <span>Female</span>
                </div>
              </div>
              <button className={cx('submit')} type="submit">
                Sign up
              </button>
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

export default Register;
