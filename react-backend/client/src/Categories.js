import React, { Component } from 'react';
import './App.css';
import './index.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import CategoryItem from './CategoryItem';


function Categories(props) {
  console.log("categories categories", props.categories)
  const categ = props.categories &&
    props.categories.map((category, index) => <CategoryItem key={index} {...category}/>)

  return (
    <div>
    <ul className="Categories List">
      <h1>Categories List</h1>
        {categ}
    </ul>
    </div>
  )
}


export default Categories;
