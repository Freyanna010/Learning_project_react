import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = ({ posts, addPost, newPostText, updateNewPostText }) => {
  let newPostElement = React.createRef();

  let onClickHandler = () => {
    addPost();
  };

  let onChangeHandler = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={classes.posts_block}>
      <div>my posts</div>

      <div className={classes.new_post}>
        <div className={classes.new_post_text}>
          <textarea
            placeholder="new post"
            value={newPostText}
            onChange={onChangeHandler}
            ref={newPostElement}
          />
        </div>
        <div className={classes.new_post_button}>
          <button onClick={onClickHandler}>add post</button>
        </div>
      </div>

      <div className={classes.posts}>
        {posts.map((post) => (
          <Post
            id={post.id}
            message={post.message}
            likeCount={post.likeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
