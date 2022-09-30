import React, { useState } from 'react';
import { Input, AutoComplete, section, Row } from 'antd';
import Logo from '../../Icons/Logo';
import UserAvatar2 from '../../Icons/UserAvatar2';
import Cart from '../../Icons/Cart';
import BurgerMenu from '../../Icons/BurgerMenu';
import './Trial.css';
function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query) =>
  new Array(getRandomInt(10))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} in{' '}
              <a
                href={`http://localhost:3004/products/?q=${query}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {category}
              </a>
            </span>
          </div>
        ),
      };
    });

const Complete = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={5}
      className='searchBar'
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search
        size='large'
        placeholder='Search essentials, groceries, and more ...'
        enterButton
      />
    </AutoComplete>
  );
};

const Trial = () => {
  return (
    <div className='navBox'>
      <nav>
        <section className='sideMenuOpener'>
          {' '}
          <BurgerMenu />{' '}
        </section>
        <section className='logoJio'>
          <Logo />
        </section>
        <section className='search'>
          <Complete />{' '}
        </section>
        <section className='userInfo'>
          <UserAvatar2 />
          <span className='cart-text'>Sign in / Sign Up</span>
        </section>
        <section className='cart'>
          <Cart />
          <span className='cart-text'>Cart</span>
        </section>
      </nav>
    </div>
  );
};

export default Trial;
