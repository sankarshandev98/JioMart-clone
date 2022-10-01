import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import '../../App.css';
import '../CSS/Fruits.css';

export const SortBar = ({ sortProcess }) => {
  const bt1 = useRef();
  const bt2 = useRef();
  const bt3 = useRef();
  const bt4 = useRef();
  const bt5 = useRef();
  const [state, setstate] = useState(1);
  return (
    <div className='sort'>
      <div>
        <span>SORT BY :</span>
        <button
          ref={bt1}
          style={(() => {
            if (state === 1) return btnBlueBorder;
          })()}
        >
          Popularity
        </button>
        <button
          ref={bt2}
          style={(() => {
            if (state === 2) return btnBlueBorder;
          })()}
          onClick={() => {
            sortProcess({ property: 'cost', order: 'DESC' });
            setstate(2);
          }}
        >
          High to Low
        </button>
        <button
          ref={bt3}
          style={(() => {
            if (state === 3) return btnBlueBorder;
          })()}
          onClick={() => {
            sortProcess({ property: 'cost', order: 'asc' });
            setstate(3);
          }}
        >
          Low to High
        </button>
        <button
          ref={bt4}
          style={(() => {
            if (state === 4) return btnBlueBorder;
          })()}
          onClick={() => {
            sortProcess({ property: 'discount', order: 'DESC' });
            setstate(4);
          }}
        >
          Discount
        </button>
        <button
          ref={bt5}
          style={(() => {
            if (state === 5) return btnBlueBorder;
          })()}
          onClick={() => {
            sortProcess({ property: '', order: '' });
            setstate(5);
          }}
        >
          All Products
        </button>
      </div>
    </div>
  );
};
const btnBlueBorder = {
  borderColor: '#008ecc',
};
