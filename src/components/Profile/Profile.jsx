import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";

const Profile = ({ stateProfilePage, addPost, updateNewPostText }) => {
  return (
    <div lassName={classes.profile}>
      <ProfileInfo />
      <MyPosts
        posts={stateProfilePage.posts}
        newPostText={stateProfilePage.newPostText}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
