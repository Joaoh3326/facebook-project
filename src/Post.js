import React from 'react';

const Post = () => (
  <div className="container">
    <div className="profile">
      <img className="avatar" src="./avatar.png" alt="" />
      <div className="title">
        <strong>Diego Schell Fernandes</strong>
        <p>há 3 min</p>
      </div>
      <span />
    </div>

    <p className="comment">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra egestas aliquam.
      Morbi sit amet viverra metus. Aliquam erat volutpat. Nam lobortis, nisi vel tincidunt ornare,
      purus tellus congue neque, ut mollis orci tellus eget quam. Nullam volutpat nunc in vestibulum
      dictum. In vehicula, ipsum vel tempor euismod, sapien nisi eleifend magna, eget varius magna
      sem id quam. Etiam lacinia, eros in egestas varius, ipsum leo pharetra augue.
    </p>
  </div>
);

export default Post;
