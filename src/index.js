import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="wrapper">
          <div className="content">
            <Post />
          </div>
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
