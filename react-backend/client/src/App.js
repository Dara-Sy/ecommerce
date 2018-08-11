import React, { Component } from 'react';
import './App.css';

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

              <div>
                <div className="picGallery">
                  <img src={product.img_url} />
                </div>

                <div>
                   <h2>{product.name}</h2>
                </div>
                <div>
                    {product.description}
                </div>
              </div>


              </li>
              )}

          <img src={`data:image/jpeg;base64,${this.state.data}`} />

        </ul>
      </div>
      </body>
    );
  }
}

export default App;



