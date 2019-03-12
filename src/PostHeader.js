import React from 'react';

const PostHeader = ({ props: { avatar, name, timePost } }) => (
  <div className="profile">
    <img className="avatar" src={avatar} alt="" />
    <div className="title">
      <strong>{name}</strong>
      <p>
        há
        {timePost}
      </p>
    </div>
    <span />
  </div>
);

export default PostHeader;
