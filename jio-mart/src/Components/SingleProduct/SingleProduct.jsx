import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singleProduct } from '../../Redux/SingleProduct/action';
import '../CSS/SingleProduct.css';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import CheckIcon from '@material-ui/icons/Check';
import { FaStar } from 'react-icons/fa';
import { Container, Radio, Rating } from './RatingStyles';
import styled from 'styled-components';
import { GetData, Setdata } from '../Utils/localStorage';
import { SideCatBar, JioButton, PlusMinusBtn } from '../index';

import {
  getProducts,
  getCategoryDetails,
  updateCart,
} from '../../Redux/Products/actions';
import { Context } from '../Context/ContextProvider';
import VegIndicator from '../../Icons/VegIndicator';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    position: 'absolute',
    width: 350,
    height: 30,
    marginTop: 200,
    backgroundColor: 'black',
    border: '1px solid #000',
    padding: theme.spacing(2, 4, 3),
  },
}));
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function SingleProduct({ match }) {
  const [number, setNumber] = React.useState('');
  const cart = useSelector((store) => store.cart.cartItems);
  const { setcartPopUpVisible } = useContext(Context);

  //Rating
  const [rate, setRate] = React.useState(0);

  const classes = useStyles();

  //Modal
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'></h2>
      <p
        id='simple-modal-description'
        style={{ marginTop: -20, backgroundColor: 'black', color: 'white' }}
      >
        <CheckIcon /> Product added to WishList Successfully
      </p>
    </div>
  );

  const [wishList, setWishList] = React.useState('');

  const id = match.params.id;

  const dispatch = useDispatch();

  const handleGet = () => {
    dispatch(singleProduct(id));
  };

  React.useEffect(() => {
    handleGet();
  }, [id]);

  const { product } = useSelector((state) => ({
    product: state.singleProduct.data,
  }));
  const handleTest = () => {
    const options = {
      method: 'POST',
      url: 'https://nexmo-nexmo-sms-verify-v1.p.rapidapi.com/send-verification-code',
      params: { brand: 'jiomart', phoneNumber: number },
      headers: {
        'x-rapidapi-key': '6fbb0221d8msh9455ae9548b45c4p146732jsn4c32a0214bf3',
        'x-rapidapi-host': 'nexmo-nexmo-sms-verify-v1.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //const {data} = useSelector((state)=>state.singleProduct)
  //console.log(data)

  // WishList
  // const handleAdd = () => {
  //   // eslint-disable-next-line array-callback-return
  //   const upDate = data.map((item) => {
  //     if (product.id === id) {
  //       return item;
  //     }
  //     return undefined;
  //   });
  //   console.log('Hello');
  //   Setdata('wishlist', upDate);
  //   setWishList(upDate);
  //   alert('Product Added to WishList Successfully');
  // };

  return (
    <div style={{background:"white"}} className={classes.root}>
      <Grid container spacing={1} key={product.id}>
        <Grid item md={5} sm={12} xs={12}>
          {/* <div className='logo-div'>
            <img alt="icons" src='https://www.jiomart.com/assets/jiomsite/images/icons/new-veg.svg' />
          </div> */}
          <div className='image-div'>
            <img alt='icons' src={product.image} />
          </div>
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <div className='content-div'>
            <h3 className='title-div'>{product.title}</h3>
            <div className='mrp-div'>
              <section>
                <p>
                  <span>&#8377; {product.cost}</span>
                  <span>
                    {product.discount && (
                      <span className='mrp'>
                        MRP:{' '}
                        {
                          <span style={{ textDecoration: 'line-through' }}>
                            &#8377; {product.mrp}
                          </span>
                        }{' '}
                      </span>
                    )}
                  </span>
                </p>
              </section>
              <button
                onClick={handleOpen}
                type='button'
                className='wishlist'
              ></button>
            </div>
            <h6 className='stock-green'>In Stock</h6>
            <div className='soldby-div'>
              <span>
                Sold by{' '}
                <span style={{ color: '#008ecc' }}>Reliance Retail</span>
              </span>
            </div>
            <div className='shipping-div'>
              <span style={{ display: 'inline-block' }}>Inaugural Offer</span>{' '}
              <h6 style={{ display: 'inline-block' }}>Free Shipping</h6>
            </div>
            <div className='three-logos'>
              <img
                alt='icons'
                src='https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/food-icon/sodexo.svg'
              />
              <img
                alt='icons'
                src='https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/food-icon/edenred.svg'
              />
              <img
                alt='icons'
                src='https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/food-icon/paytm_food_wallet.svg'
              />
              <p>T&C Apply</p>
            </div>
            <section className='btn-div'>
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
            <div className='delivery-div'>
              <h5>Delivery</h5>
              <div className='pincode-div'>
                <img
                  alt='icons'
                  src='https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/location-on.svg'
                />
                <input
                  type='tel'
                  placeholder='Enter Your Pincode'
                  className='input'
                />
                <button>CHECK</button>
              </div>
            </div>
            <div className='offers-div'>
              <h5>Offers</h5>
              <h6>
                <img
                  alt='icons'
                  src='https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/offer_green.svg'
                />
                Mobikwik - Get 5% Cashback. Valid Once per customer. T&C Apply.
              </h6>
              <h6>
                <img
                  alt='icons'
                  src='https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/offer_green.svg'
                />
                Simpl - Pay using Simpl & Get Upto Rs. 200 Cashback* on Min. Txn
                of Rs. 250/-. T&C Apply.
              </h6>
            </div>
          </div>
        </Grid>
        <div className='product-detail-section'>
          <hr style={{ display: 'block' }} />
          <div className='description-div'>
            <h3>Description</h3>
            <p style={{fontFamily:"jioBold"}} >{product.title} </p>
            <p style={{ fontFamily: 'jioLight' }}>{product.description} </p>
          </div>
          <hr style={{ display: 'block' }} />
          <div className='description-div'>
            <h3>Feature & Details</h3>
            <li style={{ fontFamily: 'jioLight' }}>{product.feature}</li>
          </div>
          <hr style={{ display: 'block' }} />
          <div className='description-div'>
            <h3>Product Information</h3>
            <div className='box-div'>
              <table>
                <tr>
                  <td>Brand</td>
                  <td>JIO</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td>N.A.</td>
                </tr>
              </table>
              <table>
                <tr>
                  <td>Country Of Origin</td>
                  <td>India</td>
                </tr>
                <tr>
                  <td>Food Type </td>
                  <td>
                    <VegIndicator />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <hr style={{ display: 'block' }} />
          <div className='disclaimer'>
            <h3>Disclaimer:</h3>
            <p style={{ fontFamily: 'jioLight' }}>
              Despite our attempts to provide you with the most accurate
              information possible, the actual packaging, ingredients and colour
              of the product may sometimes vary. Please read the label,
              directions and warnings carefully before use.
            </p>
          </div>
        </div>
      </Grid>
    </div>
  );
}
export { SingleProduct };

// <div>
// <h5>Product Rating</h5>
// <Container>
//   {[...Array(5)].map((item, index) => {
//     const givenRating = index + 1;
//     return (
//       <label>
//         <Radio
//           type='radio'
//           value={givenRating}
//           onClick={() => {
//             setRate(givenRating);
//             Setdata('rating', givenRating);
//             alert(
//               `Are you sure you want to give ${givenRating} stars ?`
//             );
//           }}
//         />
//         <Rating>
//           <FaStar
//             color={
//               givenRating < rate || givenRating === rate
//                 ? '#007bff'
//                 : 'rgb(192,192,192)'
//             }
//           />
//         </Rating>
//       </label>
//     );
//   })}
// </Container>
// </div>
