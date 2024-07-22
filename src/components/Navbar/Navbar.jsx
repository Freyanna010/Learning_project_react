import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <Link to="/profile">
          <img src="./../../../public/icons_profile.png" alt="" srcset="" />
          Profile
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/messages">
          <img src="./../../../public/message_profile.png"/>
          Message
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/news">
         <img src="./../../../public/newa_profile.png"/>
        News
        </Link>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
