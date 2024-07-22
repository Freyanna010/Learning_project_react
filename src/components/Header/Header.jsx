import classes from "./Header.module.css";

const Header = () => {
return (
  <header className={classes.header}>
    <div className={classes.t}>
      <img src="./../public/icons8-кот-50.png" />
      <h2>BaldaTallk</h2>
    </div>
 
  </header>
);

};

export default Header;