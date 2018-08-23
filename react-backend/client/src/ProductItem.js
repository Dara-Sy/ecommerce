import React, { Component } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';



class ProductItem extends Component {
  constructor(props){
    super(props);
  };

  render(){
        console.log("props",this.props);

    return(
        <div className="Products">
          <ul>

                <li key={this.props.id}>

                <section className="box">
                    <div className="picGallery">
                      <img src={this.props.img_url} />

                       <h2>{this.props.name}</h2>
                        {this.props.description}
                    </div>
                    <div className="picGallery">
                        ${this.props.price}.00 {"\n"}
                        <FontAwesomeIcon icon={faHeart} className="heart" />
                        {"\n"}
                        <FontAwesomeIcon icon={faCartPlus} className="cart" />


                    </div>
                </section>

                </li>

          </ul>

      </div>

      )
  }

}

export default ProductItem;
