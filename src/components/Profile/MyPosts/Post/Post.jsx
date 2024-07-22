import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="./../../../../public/740d048d56c211ee9dab96e999421984_upscaled.jpeg" />
      {props.message}
      <div>
        <span>💜{props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
