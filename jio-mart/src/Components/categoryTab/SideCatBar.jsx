import React, { useEffect } from 'react';
import { Collapse, Checkbox, Row, Col } from 'antd';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import 'rc-slider/assets/index.css';
import { categoriesData } from '../../Services/data';
import './SideCatBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getCategoryDetails } from '../../Redux/Products/actions';

const { Panel } = Collapse;
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

// const plainOptions = ['Apple', 'Pear', 'Orange'];
// const options = [
//   { label: 'Apple', value: 'Apple' },
//   { label: 'Pear', value: 'Pear' },
//   { label: 'Orange', value: 'Orange' },
// ];
const cats = [
  'Fruits & Vegetables',
  'Dairy & Bakery',
  'Staples',
  'Snacks & Branded Foods',
  'Beverages',
  'Personal Care',
  'Home Care',
  'Baby Care',
  'Home & Kitchen',
];

function parseData(arr, id) {
  let subcats = [];
  let singleSubcatArray = [];
  for (let x of arr) {
    subcats.push(x.subCat);
  }
  for (let x of subcats) {
    for (let y of x) {
      singleSubcatArray.push(y);
    }
  }

  const currentSubcatDetails = singleSubcatArray.filter((arr) => {
    return arr.id === id;
  });

  return currentSubcatDetails;
}

const SideCatBar = ({
  subCat,
  setType,
  types,
  setBrand,
  brands,
  setPrice,
  priceRange,
}) => {
  const [state, setstate] = useState({ types: [], brands: [] });
  const [currentPriceRange, setCurrentPriceRange] = useState([1, 1500]);
  useEffect(() => {
    setCurrentPriceRange(priceRange);
  }, [priceRange]);
  const { mainCat, catData } = useSelector((store) => ({
    mainCat: store.currentCat,
    catData: store.categories.category,
  }));
  const dispatch = useDispatch();
  const currentSubcatDetails = parseData(catData, subCat);

  let actKey = cats.indexOf(mainCat);
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
  useEffect(() => {
    dispatch(getCategoryDetails());
  }, [dispatch]);
  useEffect(() => {
    const currentSubcatDetails = parseData(catData, subCat);
    setstate({
      types: currentSubcatDetails[0] && currentSubcatDetails[0].types,
      brands: currentSubcatDetails[0] && currentSubcatDetails[0].brands,
    });
  }, [catData, subCat]);

  const typeCheckBoxes =
    state.types &&
    state.types.map((type) => {
      return (
        <Col key={type.id} span={24}>
          <Checkbox defaultChecked={false} value={type.id}>
            {type.name}
          </Checkbox>
        </Col>
      );
    });
  const brandCheckBoxes =
    state.types &&
    state.brands.map((brand) => {
      return (
        <Col key={brand.id} span={24}>
          <Checkbox defaultChecked={false} value={brand.id}>
            {brand.name}
          </Checkbox>
        </Col>
      );
    });

  return (
    <div className='colllapseContainer'>
      <h1>Categories</h1>
      <Collapse
        style={{ background: 'white' }}
        defaultActiveKey={[actKey]}
        key={actKey}
      >
        {mainCategory}
      </Collapse>

      <h1>Filter</h1>

      <Collapse style={{ padding: '10px 24px' }}>
        <Checkbox.Group
          style={{ width: '100%' }}
          value={types}
          onChange={(checkedValues) => setType(checkedValues)}
        >
          <div
            style={{
              fontSize: '16px',
              fontFamily: 'jioMedium',
              paddingBottom: '4px',
            }}
          >
            Categories
          </div>
          <Row>{typeCheckBoxes}</Row>
        </Checkbox.Group>
        <Checkbox.Group
          style={{ width: '100%' }}
          value={brands}
          onChange={(checkedValues) => setBrand(checkedValues)}
        >
          <div
            style={{
              fontSize: '16px',
              fontFamily: 'jioMedium',
              paddingBottom: '4px',
            }}
          >
            Brands
          </div>
          <Row>{brandCheckBoxes}</Row>
        </Checkbox.Group>
        <div>
          <div
            style={{
              fontSize: '16px',
              fontFamily: 'jioMedium',
              paddingBottom: '24px',
              zIndex: '1',
            }}
          >
            Price
          </div>
          <Range
            marks={{
              [priceRange[0]]: `₹${priceRange[0]}`,
              [priceRange[1]]: `₹${priceRange[1]}`,
            }}
            min={priceRange[0]}
            max={priceRange[1]}
            defaultValue={priceRange}
            tipFormatter={(value) => `₹${value}`}
            tipProps={{
              placement: 'top',
              visible: true,
            }}
            value={currentPriceRange}
            onChange={(price) => setCurrentPriceRange(price)}
            onAfterChange={(price) => {
              setPrice(price);
            }}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default SideCatBar;
