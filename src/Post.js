import React from 'react';

import PostHeader from './PostHeader';

const Post = (props) => {
  const { comment } = props.post;
  return (
    <div className="container">
      <PostHeader header={props} />
      <p className="comment">{comment}</p>
    </div>
  );
};

export default Post;
