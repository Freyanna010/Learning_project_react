import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div lassName={classes.profile_info}>
      <img className={classes.cover} src="./../../../../public/cover.jpg" />
      <div className={classes.profile_description}>awa + description</div>
    </div>
  );
};

export default ProfileInfo;
