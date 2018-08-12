import React, { Component } from 'react';
import './App.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';




// import './assets/css/fonts.css';

class App extends Component {
  state = {
    products:[],
    photos: []
  }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(products => this.setState({ products}));
  }

  render() {
    return (
      <body>
      <div className="App">
        <h1>products</h1>
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



