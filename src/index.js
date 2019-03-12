import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Diego Schell Fernandes',
        timePost: '3 min',
        avatar: './avatar.png',
        comment: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam pharetra egestas aliquam.
          Morbi sit amet viverra metus. Aliquam erat volutpat. Nam lobortis,
          nisi vel tincidunt ornare, purus tellus congue neque, ut mollis orci
          tellus eget quam.`,
      },
      {
        id: 2,
        name: 'Diego Schell Fernandes',
        timePost: '3 min',
        avatar: './avatar.png',
        comment: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam pharetra egestas aliquam.
          Morbi sit amet viverra metus. Aliquam erat volutpat. Nam lobortis,
          nisi vel tincidunt ornare, purus tellus congue neque, ut mollis orci
          tellus eget quam.`,
      },
      {
        id: 3,
        name: 'Diego Schell Fernandes',
        timePost: '3 min',
        avatar: './avatar.png',
        comment: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam pharetra egestas aliquam.
          Morbi sit amet viverra metus. Aliquam erat volutpat. Nam lobortis,
          nisi vel tincidunt ornare, purus tellus congue neque, ut mollis orci
          tellus eget quam.`,
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="wrapper">
          <div className="content">
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
