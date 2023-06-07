import classNames from 'classnames/bind';
import styles from './SidebarAdmin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBoxesPacking,
  faFileInvoice,
  faFilePdf,
  faList,
  faUsersRectangle,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function SidebarAdmin() {
  const [activeItem, setActiveItem] = useState('customer');

  const handleItemClick = (item) => {
    setActiveItem((prevItem) => (prevItem === item ? null : item));
  };
  return (
    <div className={cx('nav-wrapper')}>
      <ul className={cx('nax-side')}>
        <li className={cx('nav-items')}>
          <Link
            to={config.routes.customermanagement}
            className={cx('nav-link', `${activeItem === 'customer' ? 'active' : ''}`)}
            onClick={() => handleItemClick('customer')}
            disabled={activeItem === 'customer'}
          >
            <div className={cx('nav-icon')}>
              <FontAwesomeIcon icon={faList} />
            </div>
            <span className={cx('nav-title')}>Customer Management</span>
          </Link>
        </li>
        <li className={cx('nav-items')}>
          <Link
            to={config.routes.productmanagement}
            className={cx('nav-link', `${activeItem === 'product' ? 'active' : ''}`)}
            onClick={() => handleItemClick('product')}
          >
            <div className={cx('nav-icon')}>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <span className={cx('nav-title')}>Product Management</span>
          </Link>
        </li>
        <li className={cx('nav-items')}>
          <Link
            to={config.routes.suppliermanagement}
            className={cx('nav-link', `${activeItem === 'supplier' ? 'active' : ''}`)}
            onClick={() => handleItemClick('supplier')}
          >
            <div className={cx('nav-icon')}>
              <FontAwesomeIcon icon={faBoxesPacking} />
            </div>
            <span className={cx('nav-title')}>Supplier Management</span>
          </Link>
        </li>
        <li className={cx('nav-items')}>
          <Link
            to={config.routes.inventorymanagement}
            className={cx('nav-link', `${activeItem === 'inventory' ? 'active' : ''}`)}
            onClick={() => handleItemClick('inventory')}
          >
            <div className={cx('nav-icon')}>
              <FontAwesomeIcon icon={faWarehouse} />
            </div>
            <span className={cx('nav-title')}>Inventory Management</span>
          </Link>
        </li>
        <li className={cx('nav-items')}>
          <div
            className={cx('nav-link', `${activeItem === 'user' ? 'active' : ''}`)}
            onClick={() => handleItemClick('user')}
          >
            <div className={cx('nav-icon')}>
              <FontAwesomeIcon icon={faUsersRectangle} />
            </div>
            <span className={cx('nav-title')}>User Management</span>
          </div>
        </li>
        <li className={cx('nav-items')}>
          <div
            className={cx('nav-link', `${activeItem === 'invoice' ? 'active' : ''}`)}
            onClick={() => handleItemClick('invoice')}
          >
            <div className={cx('nav-icon')}>
              <FontAwesomeIcon icon={faFileInvoice} />
            </div>
            <span className={cx('nav-title')}>Invoice Management</span>
          </div>
        </li>
        <li className={cx('nav-items')}>
          <div
            className={cx('nav-link', `${activeItem === 'report' ? 'active' : ''}`)}
            onClick={() => handleItemClick('report')}
          >
            <div className={cx('nav-icon')}>
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
            <span className={cx('nav-title')}>Report</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SidebarAdmin;
