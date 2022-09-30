import React from 'react';

const OfferBg = ({discount}) => {
  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      width='40px'
      viewBox='0 0 38 38'
    >
      <title>offer_bg</title>
      <path
        d='M36.17,19.49a1.06,1.06,0,0,1,0-1l1.48-2.9a3.24,3.24,0,0,0-1.49-4.38l-3-1.51a1.13,1.13,0,0,1-.6-.8L32,5.74A3.43,3.43,0,0,0,28.12,3l-3.33.46a1.22,1.22,0,0,1-1-.31L21.4.94a3.54,3.54,0,0,0-4.8,0L14.18,3.18a1.18,1.18,0,0,1-1,.3L9.88,3A3.43,3.43,0,0,0,6,5.74L5.41,8.92a1.13,1.13,0,0,1-.6.8l-3,1.51A3.23,3.23,0,0,0,.35,15.61l1.48,2.9a1.06,1.06,0,0,1,0,1L.35,22.39a3.23,3.23,0,0,0,1.49,4.38l3,1.51a1.13,1.13,0,0,1,.6.8L6,32.26A3.41,3.41,0,0,0,9.38,35a4.19,4.19,0,0,0,.5,0l3.33-.46a1.22,1.22,0,0,1,1,.31l2.42,2.24a3.53,3.53,0,0,0,4.8,0l2.42-2.24a1.22,1.22,0,0,1,1-.31l3.33.46A3.43,3.43,0,0,0,32,32.26l.58-3.18a1.13,1.13,0,0,1,.6-.8l3-1.51a3.23,3.23,0,0,0,1.49-4.38Z'
        transform='translate(0 0)'
        fill='#e11500'
        fillRule='evenodd'
      />
      <text
        transform='translate(6.63 16.86)'
        fontSize='13'
        fill='#fff'
        fontFamily='jioMedium'
        t
      >
        {discount}%
      </text>
      <text
        transform='translate(7.71 27.36) scale(1.12 1)'
        fontSize='10'
        fill='#fff'
        fontFamily='jioMedium'
      >
        OFF
      </text>
    </svg>
  );
};

export default OfferBg;
