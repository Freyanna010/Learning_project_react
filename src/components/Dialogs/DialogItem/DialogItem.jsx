import classes from "./DialogItem.module.css"
import { Link, Routes } from "react-router-dom";

 const DialogItem = (props) => {

const getSexColor = (sex) => {
  if(sex === "male")
    {
    return classes.dialogs_avatar_male
  }
   else {
     return classes.dialogs_avatar_female;
  }
}  

   return (
     <div className={classes.dialogs}>
       <div className={getSexColor(props.sex)}></div>

       <div className={classes.dialogs_name}>
         <Link to={`/messages/${props.id}`}>{props.name} </Link>
       </div>
     </div>
   );
 }; 


export default DialogItem;