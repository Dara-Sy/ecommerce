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
      .then(p => {
        this.setState({
        categories: p.categories
  })
 })
      .catch((err) => console.log(err))
}


  render() {
    return (
      <div className="Categories">
      <header>
          <h1>Categories</h1>

      </header>


        </div>
      );
  }
}

export default Categories;







