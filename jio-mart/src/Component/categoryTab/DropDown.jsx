import React from 'react';
import { Menu, Dropdown } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './DropDown.css';
import { useDispatch } from 'react-redux';
import { changeCat } from '../../Redux/Products/categoryActions';


const DropDown = ({ category }) => {
  const dispatch= useDispatch()

  let catName =(category.name.replace(/ & |, | /g, '-')).toLowerCase() ;
  const menu2 = category.subSubCat.map((subCat) => {
    let subCatName = (subCat.name.replace(/ & |, | /g, '-')).toLowerCase();
    return (
      <Menu.Item key={uuidv4()}  className='hoverSubCat'>
        <Link to={`/${catName}/${subCatName}`} rel='noopener noreferrer'>
          {subCat.name}
        </Link>
      </Menu.Item>
    );
  });

  const menu = <Menu className='dMenu'>{menu2}</Menu>;

  return (
    <Dropdown overlay={menu} onClick={()=>dispatch(changeCat(category.name))} className='dropDownContainer'>
      <Link to={`/${catName}`} className='ant-dropdown-link catLink'>
        <span>{category.name}</span>
      </Link>
    </Dropdown>
  );
};

export default DropDown;

