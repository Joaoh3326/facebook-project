import React from 'react';

import PostHeader from './PostHeader';

const Post = (props) => {
  const { post } = props;
  return (
    <div className="container">
      <PostHeader header={post} />
      <p className="comment">{post.comment}</p>
    </div>
  );
};

export default Post;
