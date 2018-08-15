import React, { Component } from 'react';
import './App.css';
import './index.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class Categories extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    fetch('/categories')
    .then(res => res.json())
    .then(categories => this.seState({ categories}));
  }

  render() {
    return (
      <div className="Categories">
      <header>
          <h1>Categories</h1>

      </header>

      <ul>
        {this.state.categories.map(category =>
          <li key={category.id}>

          <section className="box">
            <div className="picGallery">
              <img src={category.img_url} />

              <h2> {category.name} </h2>
            </div>
          </section>
          </li>
          )}
        </ul>
        </div>
      );
  }
}

export default Categories;







