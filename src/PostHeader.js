import React from 'react';

const PostHeader = (props) => {
  console.log(props);
  const { avatar, name, timePost } = props.header;

  return (
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
};

export default PostHeader;
