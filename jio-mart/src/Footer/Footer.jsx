import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import style from './Footer.module.css';

export function Footer1() {
  const Footer = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  return (
    <div className={style.mainFooter}>
      <Footer>
        <div className={style.infoBox}>
          <p className={style.footerHead}>MOST POPULAR CATEGORIES</p>
          <ul>
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal care</li>
            <li>Home Care</li>
            <li>Fruites and Vegetables</li>
            <li>Baby Care</li>
            <li>Snacks & Branded Foodes</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>
        <div className={style.infoBox}>
          <p className={style.footerHead}>CUSTOMER SERVICES</p>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
            <li>E-waste Policy</li>
          </ul>


        </div>
        <div className={style.infoBox}>
          <p className={style.footerHead}>CONTACT US</p>
          <ul>
            <li>
              WhatsApp us :{' '}
              <Link className={style.link} href='#'>
                70003 70003
              </Link>
            </li>
            <li>
              Call us :{' '}
              <Link className={style.link} href='#'>
                1800 890 1222
              </Link>
            </li>
            <p>6:00 AM to 8:00 PM, 365 days</p>
            <li>
              Please note that you are accessing <br /> the BETA version of{' '}
              <Link to='/'>www.jiomart.com</Link> .
            </li>
            <li>
              Should you encounter any bugs, glitches, <br /> lack of functionality,
              delayed deliveries, <br /> billing errors or other problems on the <br /> beta
              website, please
            </li>
            <li>
              Email us on{' '}
              <Link to='#' className={style.link}>
                cs@jiomart.com
              </Link>
            </li>
          </ul>
          <div className={style.apps}>
          <p className={style.footerHead}>DOWNLOAD APP</p>
              <img
                style={{paddingRight:'10px',paddingBottom:'10px'}}
                src='https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png'
                alt=''
              />
              <img
              style={{paddingBottom:'10px'}}
                src='https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png'
                alt=''
              />
          </div>
        </div>
      </Footer>
    </div>
  );
}
