import classes from "./../Dialogs.module.css";
import { Link, Routes } from "react-router-dom";

const Message = (props)=> {


 
  return (
  <div className={classes.message}>{props.message}</div>
  )


}
  
  
  


export default Message;