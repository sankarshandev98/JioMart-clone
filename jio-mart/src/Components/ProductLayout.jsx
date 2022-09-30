import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Pagination, Row, Spin, Space } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import OfferBg from '../Icons/OfferBg';
import VegIndicator from '../Icons/VegIndicator';
import DefaultTitleImage from '../Icons/DefaultTitleImage';
import { Link } from 'react-router-dom';

import {
  getProducts,
  getCategoryDetails,
  updateCart,
} from '../Redux/Products/actions';
import { SortBar } from './index';
import { categoriesData } from '../Services/data';
import './CSS/ProductLayout.css';
import { SideCatBar, JioButton, PlusMinusBtn } from './index';
import axios from 'axios';
import { Context } from './Context/ContextProvider';

function categoryImageFilter(id) {
  const data = categoriesData.categories[0].subCat;
  const tempArr = [];
  const joinedArr = [];
  for (let x of data) {
    tempArr.push(x.subSubCat);
  }
  for (let x of tempArr) {
    for (let y of x) {
      joinedArr.push(y);
    }
  }
  const currentSubcatDetails = joinedArr.filter((arr) => {
    return arr.id === id;
  });

  return currentSubcatDetails;
}

const ProductLayout = ({ match, mainCat }) => {
  const cart = useSelector((store) => store.cart.cartItems);
  const { setcartPopUpVisible } = useContext(Context);

  const [priceRange, setPriceRange] = useState([]);
  const [types, setTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState(priceRange);

  const [sort, setSort] = useState({ property: '', order: '' });
  const [currentPage, setCurrentPage] = useState(1);

  const dynamicLink = match && match.params.id;
  const dispatch = useDispatch();
  const { products, paginateData, loading } = useSelector((store) => ({
    products: store.state.products,
    paginateData: store.state.paginateData,
    cart: store.cart,
    loading: store.state.loading,
  }));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(
      getProducts(sort, mainCat, dynamicLink, types, brands, price, currentPage)
    );
    window.scrollTo(0, 0);
    return () => {};
  }, [dispatch, sort, mainCat, dynamicLink, types, brands, price, currentPage]);

  useEffect(() => {
    const fetchProducts = axios.create({
      baseURL: 'https://kanthuserver.herokuapp.com/',
      method: 'get',
      params: {
        cat: dynamicLink,
        type: types,
        brand: brands,
        _sort: 'cost',
      },
    });
    function getHighestProductPrice() {
      return fetchProducts('/products', { params: { _order: 'DESC' } });
    }
    function getLowestProductPrice() {
      return fetchProducts('/products', { params: { _order: 'asc' } });
    }
    let lowestPrice, highestPrice;
    Promise.all([getHighestProductPrice(), getLowestProductPrice()]).then(
      (results) => {
        highestPrice = results[0].data[0] && results[0].data[0].cost;
        lowestPrice = results[1].data[0] && results[1].data[0].cost;
        setPriceRange([lowestPrice, highestPrice]);
      }
    );
    return () => {
      setPriceRange([]);
    };
  }, [dispatch, mainCat, dynamicLink, types, brands]);

  useEffect(() => {
    setPrice([]);
    setTypes([]);
    setBrands([]);
    setSort({ property: '', order: '' });
  }, [dynamicLink]);

  useEffect(() => {
    setCurrentPage(1);
  }, [types, brands, sort, price]);

  return (
    <div className='content-container'>
      {/* <section className='bread-crumbs'>breadcrumbs</section> */}
      <section className='side-bar'>
        <SideCatBar
          subCat={dynamicLink}
          setType={setTypes}
          types={types}
          setBrand={setBrands}
          brands={brands}
          setPrice={setPrice}
          price={price}
          priceRange={priceRange}
        />
      </section>
      <section>
        <div className='products-display'>
          {(categoryImageFilter(dynamicLink)[0] &&
            categoryImageFilter(dynamicLink)[0].image && (
              <section>
                <img
                  src={
                    (categoryImageFilter(dynamicLink)[0] &&
                      categoryImageFilter(dynamicLink)[0].image) ||
                    ''
                  }
                  alt='Category Title'
                />
              </section>
            )) || (
            <section>
              {dynamicLink && <DefaultTitleImage titleText={dynamicLink} />}
            </section>
          )}
          <section>
            <SortBar sortProcess={setSort} />
          </section>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <Spin size='large' />
            </div>
          ) : (
            <section>
              <h1>All Products</h1>
              <div className='p-cards'>
                {products.map((product) => {
                  return (
                    <div key={uuidv4()} className='card'>
                      <Link to={`/groceries/${product.id}`}>
                        <section className='card-img-section'>
                          {product.discount ? (
                            <span>
                              <OfferBg
                                discount={product.discount}
                                style={{ width: '40px' }}
                              />
                            </span>
                          ) : (
                            <span>
                              <p style={{ opacity: 0 }}>ypuii</p>
                            </span>
                          )}
                          <img src={product.image} alt='pImage' />
                          <span>
                            <VegIndicator />
                          </span>
                        </section>
                      </Link>

                      <section className='card-detail-section'>
                        <Link to={`/groceries/${product.id}`}>
                          <section>
                            <p>{product.title}</p>
                          </section>
                        </Link>
                        <section>
                          <p>
                            <span style={{ fontSize: '16px' }}>
                              &#8377; {product.cost}
                            </span>
                            <span>
                              {product.discount && (
                                <span className='mrp'>
                                  MRP:{' '}
                                  {
                                    <span
                                      style={{ textDecoration: 'line-through' }}
                                    >
                                      &#8377; {product.mrp}
                                    </span>
                                  }{' '}
                                </span>
                              )}
                            </span>
                          </p>
                        </section>

                        <section className='btn-section'>
                          {product.id in cart ? (
                            <PlusMinusBtn product={product} />
                          ) : (
                            <span
                              // style={{alignSelf:"flex-start"}}
                              onClick={() => {
                                setcartPopUpVisible(true);
                                dispatch(updateCart({ product, quantity: 1 }));
                              }}
                            >
                              <JioButton myProduct={product} />
                            </span>
                          )}
                        </section>
                      </section>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
        <div style={{ padding: '12px' }}>
          <Row gutter={12}>
            <Col span={24}>
              <Row justify={'center'} gutter={12} align={'middle'}>
                <Pagination
                  total={Number(paginateData)}
                  defaultCurrent={1}
                  current={currentPage}
                  onChange={(page) => setCurrentPage(page)}
                  pageSize={12}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`
                  }
                />
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default ProductLayout;
