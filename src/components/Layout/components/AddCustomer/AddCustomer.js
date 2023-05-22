import classNames from 'classnames/bind';
import styles from './AddCustomer.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AddCustomer({ onAddCustomer }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  //   const [customers, setCustomers] = useState([]);
  const [counter, setCounter] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      customer: counter,
      name: name,
      phone: phone,
      email: email,
      address: address,
      birth: birthday,
      city: city,
      country: country,
    };

    onAddCustomer(newCustomer);
    setCounter(counter + 1);

    // reset form fields
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setBirthday('');
    setCity('');
    setCountry('');
  };

  return (
    <form className={cx('table-registion')}>
      <h2 className={cx('table-title')}>REGISTRATION CUSTOMER FORM</h2>
      <div className={cx('form-container')}>
        <label className={cx('form-title')}>Name:</label>
        <input className={cx('form-input')} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={cx('form-container')}>
        <label className={cx('form-title')}>Phone:</label>
        <input className={cx('form-input')} type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className={cx('form-container')}>
        <label className={cx('form-title')}>Email:</label>
        <input className={cx('form-input')} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={cx('form-container')}>
        <label className={cx('form-title')}>Address:</label>
        <input className={cx('form-input')} type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className={cx('form-container')}>
        <label className={cx('form-title')}>BirthDay:</label>
        <input
          className={cx('form-input')}
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div className={cx('form-container')}>
        <label className={cx('form-title')}>City:</label>
        <input className={cx('form-input')} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div className={cx('form-container')}>
        <label className={cx('form-title')}>Country:</label>
        <input className={cx('form-input')} type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div className={cx('form-container')}>
        <button className={cx('btn-sumbit')} type="submit" onSubmit={handleSubmit}>
          Add Customer
        </button>
      </div>
    </form>
  );
}

export default AddCustomer;
