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




// import './assets/css/fonts.css';

class App extends Component {
  state = {
    products:[],
    categories:[]
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

          <Link to="/">Home</Link> <br />


          <Link to="/categories">Categories</Link>




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

      <Switch>

        <Route path="/categories" component={Categories} />
        <Route path="/" component={App} />


      </Switch>
  }

}





export default App;





