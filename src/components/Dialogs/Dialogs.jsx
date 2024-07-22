import React from "react";
import classes from "./Dialogs.module.css";
// import { Link, Routes } from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = ({ state, addMessage, updateNewMessageText }) => {
  let newMessageElement = React.createRef();

  let onClickHandler = () => {
    addMessage();
  };

  let onChangeHandler = () => {
    let text = newMessageElement.current.value;
   
    updateNewMessageText(text);
    console.log(text);
  };

  return (
    <div className={classes.dialogs_block}>
      <div className={classes.dialogs_items}>
        {state.dialogItem.map((data) => (
          <DialogItem id={data.id} name={data.name} sex={data.sex}/>
        ))}
      </div>

      <div className={classes.dialogs_messages}>
        {state.message.map((data) => (
          <Message id={data.id} message={data.message} />
        ))}

        <div className={classes.sent}>
          <textarea
            value={state.newMessageText}
            onChange={onChangeHandler}
            ref={newMessageElement}
          ></textarea>
          <button onClick={onClickHandler}>Sent</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;