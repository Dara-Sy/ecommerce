import React, { Component } from 'react';
import './App.css';
import './index.css';

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
                  </div>

                  <div className="picGallery">
                     <h2>{product.name}</h2>
                  </div>
                  <div className="picGallery">
                      {product.description}
                  </div>
                  <div className="picGallery">
                      ${product.price}.00
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



