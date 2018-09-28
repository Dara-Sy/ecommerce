import React, { Component } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import ProductItem from './ProductItem';
import Categories from './Categories';

// import './assets/css/fonts.css';




function Products(props) {

  console.log("products products",props.products)
    const prod = props.products &&
      props.products.map((product, index) => <ProductItem key={index} {...product}/>)
    console.log("in products", prod);
    return (
      <ul className="theList">
        <h1>Products List</h1>
          {prod}
      </ul>

      )


  }



// this.props.products ? console.log("yes",this.props.products)
//             : console.log("no",this.props.products)

export default Products;





