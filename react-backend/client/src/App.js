import React, { Component } from 'react';
import './App.css';
import './index.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import Categories from './Categories';




// import './assets/css/fonts.css';

class App extends Component {
  state = {
    products:[]
  }

//   componentDidMount() {
//     fetch('/products')
//       .then(res => res.json())
//       .then(products => this.setState({ products: json.products });
//   });

// }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(p => {
        this.setState({
        products: p.products
  })
 })
      .catch((err) => console.log(err))
}

  render() {
    return (
      <body>
      <div className="App">

      <header>
          <h1>products</h1>

          <a href="/" className="navLinks">Home</a>
          <a href="/categories" className="navLinks">Categories</a>


      </header>


        <ul>
          {this.state.products.map(product =>
              <li key={product.id}>

              <section className="box">
                  <div className="picGallery">
                    <img src={product.img_url} />

                     <h2>{product.name}</h2>
                      {product.description}
                  </div>
                  <div className="picGallery">
                      ${product.price}.00 {"\n"}
                      <FontAwesomeIcon icon={faHeart} className="heart" />
                      {"\n"}
                      <FontAwesomeIcon icon={faCartPlus} className="cart" />


                  </div>
              </section>


              </li>
              )}


        </ul>

      </div>



      </body>



    );

  }

}

export default App;





      /* <BrowserRouter>
        <Switch>

          <Route
            render={() => (
              <Categories
                name={this.state.name}
                img_url={this.state.img_url} />)}
                exact path="/categories"
              />

          <Route exact path="/" component={App} />

        </Switch>
      </BrowserRouter>

      */
