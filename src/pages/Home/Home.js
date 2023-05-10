import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.scss';
// import images from '~/assets/images';

const cx = classNames.bind(styles);

function Home() {
  return (
    <section>
      <div className={cx('wrapper-label')}>
        <h3 className={cx('label')}>ADIDAS</h3>
        <h3 className={cx('label')}>NIKE</h3>
        <h3 className={cx('label')}>NEW BALANCE</h3>
      </div>

      {/* Adidas */}
      <div className={cx('container')}>
        <img
          className={cx('thumbnail')}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enVN/Images/football-fw23-federations-agnostics-hp-mh-d_tcm212-1000361.jpg"
          alt="Adidas"
        />
        <div className={cx('wrapper-container')}>
          <img
            src="https://www.freepnglogos.com/uploads/adidas-logo-design-9.png"
            className={cx('logo-label')}
            alt="logo Adidas"
          />
          <button className={cx('btn-shopping')}>
            <span className={cx('content-btn')}>Shop now</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Nike */}
      <div className={cx('container')}>
        <img
          className={cx('thumbnail')}
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1750,c_limit/445b0be1-5f21-49be-9247-b042f59742b3/nike-just-do-it.jpg"
          alt="Nike"
        />
        <div className={cx('wrapper-container')}>
          <img src="https://pngimg.com/uploads/nike/nike_PNG11.png" className={cx('logo-label')} alt="logo Nike" />
          <button className={cx('btn-shopping')}>
            <span className={cx('content-btn')}>Shop now</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* New Balance */}
      <div className={cx('container')}>
        <img
          className={cx('thumbnail')}
          src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwe7775d8a/images/page-designer/2023/april/15266_Comp_A_Desktop.jpg?sw=1616&sfrm=jpg"
          alt="New Balance"
        />
        <div className={cx('wrapper-container')}>
          <img src="https://www.freepnglogos.com/uploads/new-balance-png-logo/new-balance-logo-png-white-0.png" className={cx('logo-label')} alt="logo New Balance" />
          <button className={cx('btn-shopping')}>
            <span className={cx('content-btn')}>Shop now</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
