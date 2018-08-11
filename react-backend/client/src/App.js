import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { products:[] }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(products => this.setState({ products}));
  }

  render() {
    return (
      <div className="App">
        <h1>products</h1>
        <ul>
          {this.state.products.map(product =>
              <li key={product.id}>
                <div>
                   {product.name}
                </div>
                <div>
                    {product.description}
                </div>
                    {product.img_url}

                <img src='{product.img_url}' />


              </li>
              )}
                <div>
                  <img src='http://res.cloudinary.com/daracell/image/upload/v1534018227/pure/square.jpg' />
                </div>
        </ul>
      </div>
    );
  }
}

export default App;
