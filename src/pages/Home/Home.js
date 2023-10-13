import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  const brands = [
    {
      image:
        'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enVN/Images/MH_Desktop_d_tcm212-1070331.png',
    },
    {
      image:
        'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1754,c_limit/a19feb8b-c130-4de0-8dea-f74bcd9437db/nike-just-do-it.png',
    },
    {
      image:
        'https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw36a5195c/images/page-designer/2023/may/15310_Comp_A_Desktop.jpg?sw=1616&sfrm=jpg',
    },
  ];

  const [activeBrand, setActiveBrand] = useState(0);
  const nextBrand = () => {
    setActiveBrand((prevActive) => (prevActive + 1 < brands.length ? prevActive + 1 : 0));
  };

  const prevBrand = () => {
    setActiveBrand((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : brands.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextBrand, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  const onDotClick = (index) => {
    setActiveBrand(index);
  };

  return (
    <section>
      <div className={cx('container')}>
        <div className={cx('list')}>
          {brands.map((brand, index) => (
            <div key={index} className={cx('item', { active: index === activeBrand })}>
              {index === activeBrand && (
                <img src={brand.image} alt={`Brand ${index + 1}`} className={cx('thumbnail')} />
              )}
            </div>
          ))}
        </div>
        <div className={cx('buttons')}>
          <button id="prev" onClick={prevBrand}>
            {'<'}
          </button>
          <button id="next" onClick={nextBrand}>
            {'>'}
          </button>
        </div>
        <ul className={cx('dots')}>
          {brands.map((_, index) => (
            <li
              key={index}
              className={cx('dot', { active: index === activeBrand })}
              onClick={() => onDotClick(index)}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
