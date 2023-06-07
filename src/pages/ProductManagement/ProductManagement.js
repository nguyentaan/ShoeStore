import classNames from 'classnames/bind';
import styles from './ProductManagement.module.scss';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';

const cx = classNames.bind(styles);

function ProductManagement() {
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState();
  const [productType, setProductType] = useState('');
  const [productStyle, setProductStyle] = useState('');
  const [productBrand, setProductBrand] = useState('adidas');
  const [productSupplier, setProductSupplier] = useState('');

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  useEffect(() => {
    const filteredProducts = products.filter((pro) =>
      Object.values(pro).some(
        (value) => value && typeof value === 'string' && value.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
    setFilteredProduct(filteredProducts);
  }, [searchValue, products]);

  const handleClickOpen = (product) => {
    if (product.id) {
      setProduct(product);
      setProductName(product.name);
      setProductPrice(product.price);
      setProductType(product.type);
      setProductStyle(product.style);
      setProductBrand(product.brand);
      setProductSupplier(product.supplier);
    } else {
      setProduct({});
      setProductName('');
      setProductPrice('');
      setProductType('');
      setProductStyle('');
      setProductBrand('adidas');
      setProductSupplier('');
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get('http://localhost:3000/product')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const handleAddProduct = (product) => {
    axios
      .post('http://localhost:3000/product', product)
      .then(() => {
        fetchProducts();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateProduct = (product) => {
    axios
      .put(`http://localhost:3000/product/${product.id}`, product)
      .then(() => {
        fetchProducts();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteProduct = (product) => {
    axios
      .delete(`http://localhost:3000/product/${product.id}`)
      .then(() => {
        fetchProducts();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const productData = {
      name: productName,
      price: productPrice,
      type: productType,
      style: productStyle,
      brand: productBrand,
      supplier: productSupplier,
    };

    if (
      productName.trim() === '' ||
      productPrice.trim() === '' ||
      productType.trim() === '' ||
      productStyle.trim() === '' ||
      productSupplier.trim() === ''
    ) {
      console.log('Please fill in all product information.');
      return;
    }

    if (product.id) {
      const updatedProduct = { ...product, ...productData };
      handleUpdateProduct(updatedProduct);
    } else {
      handleAddProduct(productData);
    }

    handleClose();
  };

  return (
    <section className={cx('wrapper')}>
      <div className={cx('function-site')}>
        <button variant="outlined" onClick={handleClickOpen} className={cx('btn-add')}>
          ADD
        </button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{product.id ? 'Edit Product' : 'Add Product'}</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <div className={cx('container')}>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Product name"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="number"
                    label="price"
                    type="number"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="type"
                    label="type"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="style"
                    label="Style"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={productStyle}
                    onChange={(e) => setProductStyle(e.target.value)}
                  />
                </div>
                <div className={cx('row-form')}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Brand</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="adidas"
                      name="radio-buttons-group"
                      value={productBrand}
                      onChange={(e) => setProductBrand(e.target.value)}
                    >
                      <FormControlLabel value="adidas" control={<Radio />} label="Adidas" />
                      <FormControlLabel value="nike" control={<Radio />} label="Nike" />
                      <FormControlLabel value="newbalance" control={<Radio />} label="New Balance" />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={cx('row-form')}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="supplier"
                    label="supplier"
                    type="text"
                    fullWidth
                    variant="standard"
                    autoComplete="on"
                    value={productSupplier}
                    onChange={(e) => setProductSupplier(e.target.value)}
                  />
                </div>
              </div>
            </DialogContent>
          </form>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                handleSubmit();
                handleClose();
              }}
            >
              {product.id ? 'Update Entry' : 'Submit'}
            </Button>
          </DialogActions>
        </Dialog>
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
        <div className={cx('table')}>
          <div className={cx('table-grid')}>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>ProductID</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Product</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Price</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Type</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Style</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Brand</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Supplier</h5>
            </div>
            <div className={cx('row-site')}>
              <h5 className={cx('row-title')}>Actions</h5>
            </div>
          </div>
          {filteredProduct.map((pro) => {
            return (
              <div key={pro.id} className={cx('table-grid', 'item-grid')}>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.id}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.name}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.price}$</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.type}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.style}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.brand}</p>
                </div>
                <div className={cx('item-site')}>
                  <p className={cx('item-content')}>{pro.supplier}</p>
                </div>
                <div className={cx('item-site')}>
                  <div className={cx('wrapper-icon')}>
                    <FontAwesomeIcon
                      className={cx('icon-action')}
                      icon={faPencil}
                      onClick={() => {
                        handleClickOpen(pro);
                      }}
                    />
                    <FontAwesomeIcon
                      className={cx('icon-action')}
                      icon={faTrash}
                      onClick={() => handleDeleteProduct(pro)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductManagement;
