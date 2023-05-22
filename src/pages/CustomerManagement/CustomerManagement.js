import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './CustomerManagement.module.scss';
import AddCustomer from '~/components/Layout/components/AddCustomer/AddCustomer';

const cx = classNames.bind(styles);

const sampleData = [
  {
    customer: '001',
    name: 'Nguyen Van Tan',
    phone: '0345944241',
    email: 'vantaan2002@gmail.com',
    birth: '23/03/2002',
    address: 'BR-VT',
    city: 'BR-VT',
    country: 'Viet Nam',
  },
];

function CustomerManagement() {
  // const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showForm, setShowForm] = useState(false);

  const inputRef = useRef();

  const handleAddClick = () => {
    setShowForm(true);
  };
  const handleClear = () => {
    // setSearchResult([]);
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleAddCustomer = (newCustomer) => {
    sampleData = [...sampleData, newCustomer];
    // sampleData.push(newCustomer);
    setShowForm(false);
  };

  const handleHideAddCustomer = () => {
    setShowForm(false);
    console.log(setShowForm);
  };

  return (
    <section className={cx('wrapper')}>
      <div className={cx('function-site')}>
        <button onClick={handleAddClick} className={cx('btn-add')}>
          <span>ADD</span>
        </button>
        <div className={cx('search-site')}>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            ref={inputRef}
            className={cx('input-search')}
            name="text"
            placeholder="Search..."
            type="search"
            value={searchValue}
            onChange={handleChange}
          />
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
      </div>
      <div className={cx('table-site')}>
        {showForm ? (
          <>
            <AddCustomer onAddCustomer={handleAddCustomer} />
            <div className={cx('close')}>
              <button onHide={handleHideAddCustomer} className={cx('btn-close')}>
                Close
              </button>
            </div>
          </>
        ) : (
          <div className={cx('table')}>
            <div className={cx('table-grid')}>
              <div className={cx('row-site')}>
                <h5 className={cx('row-title')}>Customer</h5>
              </div>
              <div className={cx('row-site')}>
                <h5 className={cx('row-title')}>Name</h5>
              </div>
              <div className={cx('row-site')}>
                <h5 className={cx('row-title')}>Phone</h5>
              </div>
              <div className={cx('row-site')}>
                <h5 className={cx('row-title')}>Email</h5>
              </div>
              <div className={cx('row-site')}>
                <h5 className={cx('row-title')}>BirthDay</h5>
              </div>
              <div className={cx('row-site')}>
                <h5 className={cx('row-title')}>Address</h5>
              </div>
              <div className={cx('row-site')}>
                <h5 className={cx('row-title')}>City</h5>
              </div>
              <div className={cx('row-site')}>
                <h5 className={cx('row-title')}>Country</h5>
              </div>
            </div>
            {sampleData.map((val, key) => {
              return (
                <div key={key} className={cx('table-grid', 'item-grid')}>
                  <div className={cx('item-site')}>
                    <p className={cx('item-content')}>{val.customer}</p>
                  </div>
                  <div className={cx('item-site')}>
                    <p className={cx('item-content')}>{val.name}</p>
                  </div>
                  <div className={cx('item-site')}>
                    <p className={cx('item-content')}>{val.phone}</p>
                  </div>
                  <div className={cx('item-site')}>
                    <p className={cx('item-content')}>{val.email}</p>
                  </div>
                  <div className={cx('item-site')}>
                    <p className={cx('item-content')}>{val.birth}</p>
                  </div>
                  <div className={cx('item-site')}>
                    <p className={cx('item-content')}>{val.address}</p>
                  </div>
                  <div className={cx('item-site')}>
                    <p className={cx('item-content')}>{val.city}</p>
                  </div>
                  <div className={cx('item-site')}>
                    <p className={cx('item-content')}>{val.country}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default CustomerManagement;
