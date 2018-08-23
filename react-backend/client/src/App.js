import React, { Component } from 'react';
import './App.css';
import './index.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';
// import { Route, Switch, Redirect } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import Categories from './Categories';
import Products from './Products';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [
      {"id": 1,
      "name": "Square Prints",
      "description": "4\" x 4\" photos",
      "img_url": "http://res.cloudinary.com/daracell/image/upload/v1534018227/pure/square.jpg",
      "price": 10,
      "category_id": 1}],

      categories: [],
      img_url: '',
      name: '',
      description: '',
      price: ''
    }
    // put some binding method here for faves and adding to cart
  }


  componentWillMount() {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(p => {
        this.setState({
        products: p.products
  })
 })
      .catch((err) => console.log(err))
}


// import './assets/css/fonts.css';

render() {
  console.log(this.state);
    return (
      <div className="Products">

      <header>
          <h1>products</h1>

          <Link to="/">Home</Link> <br />
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>

      </header>

      <p> This is App. </p>


      <Switch>

        <Route
          render={() => (
            <Categories categories={this.state.categories} />)}
            path="/categories"
        />

        <Route
          render={() => (
            <Products
              products={this.state.products} />)}
              path="/products"
        />

      </Switch>

      </div>


    );
  }
}



export default App;





