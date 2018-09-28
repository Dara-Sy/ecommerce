import React, { Component } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';


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
    this.fetchProducts();
    this.fetchCategories();
}

fetchProducts() {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(p => {
        this.setState({
        products: p.products
    })
   })
      .catch((err) => console.log(err))

}

fetchCategories(){
  fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(p => {
      this.setState({
        categories: p.categories
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
          <Link to="/"><h1 className="title">Color Press</h1></Link> <br />
          <div className="menu">
          <Link to="/products">Products</Link>
          </div>
          <div className="menu">
          <Link to="/categories">Categories</Link>
          </div>

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

        <Route
          render={() =>(
            <Products
              products={this.state.products} />)}
              path="/"
        />

      </Switch>

      </div>


    );
  }
}



export default App;





