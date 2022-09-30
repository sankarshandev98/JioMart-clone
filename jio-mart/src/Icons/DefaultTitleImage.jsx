import React from 'react';

const DefaultTitleImage = ({ titleText }) => {
  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 200'
    >
      <title>titleImage</title>
      <g>
        <rect x='0.13' y='0.13' width='999.75' height='199.75' fill='#ececed' />
        <path
          d='M1087.75,327.25v199.5H88.25V327.25h999.5m.25-.25H88V527H1088V327Z'
          transform='translate(-88 -327)'
        />
      </g>
      <text
        transform='translate(345 164.67)'
        fontSize='29'
        fontFamily='jioMedium'
      >
        <tspan letterSpacing='0.01em'> {titleText} </tspan>
       </text>
    </svg>
  );
};

export default DefaultTitleImage;
