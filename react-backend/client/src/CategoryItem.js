import React, { Component } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class CategoryItem extends Component {
  constructor(props){
    super(props);
  };

  render(){
    console.log("category", this.props);

    return(
      <div className="Category">
        <ul>
          <li key={this.props.id}>
          <img src={this.props.img_url} />

          <h2>{this.props.name}</h2>
          </li>
        </ul>
      </div>
      )
  }
}

export default CategoryItem;


// "id": 2,
// "name": "candles",
// "img_url": "http://res.cloudinary.com/daracell/image/upload/v1534018226/pure/candles.jpg"
