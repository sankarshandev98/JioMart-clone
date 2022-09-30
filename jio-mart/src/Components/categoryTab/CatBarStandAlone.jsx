import React, { useEffect } from 'react';
import { Collapse, Checkbox, Row, Col } from 'antd';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import 'rc-slider/assets/index.css';
import { categoriesData } from '../../Services/data';
import './SideCatBar.css';

const { Panel } = Collapse;
const { createSliderWithTooltip } = Slider;


const CatBarStandAlone = ({
  subCat,
  setType,
  types,
  setBrand,
  brands,
  setPrice,
  priceRange,
}) => {
  const mainCategory = categoriesData.categories[0].subCat.map((cat, ind) => {
    let catName = cat.name.replace(/ & |, | /g, '-').toLowerCase();

    const subCats = cat.subSubCat.map((subCat) => {
      let subCatName = subCat.name.replace(/ & |, | /g, '-').toLowerCase();
      return (
        <Link
          key={uuidv4()}
          style={{ color: 'black' }}
          to={`/${catName}/${subCatName}`}
        >
          <li>{subCat.name} </li>
        </Link>
      );
    });

    return (
      <Panel
        style={{ fontFamily: 'jioLight', fontSize: '16px' }}
        header={<h4 className='sideCatBarHeader'>{cat.name}</h4>}
        key={ind}
      >
        <ul style={{ fontSize: '14px', paddingLeft: '23px' }}>{subCats}</ul>
      </Panel>
    );
  });

  return (
    <div className='colllapseContainer'>
      <Collapse
        style={{ background: 'white' }}
      >
        {mainCategory}
      </Collapse>
    </div>
  );
};

export default CatBarStandAlone;
