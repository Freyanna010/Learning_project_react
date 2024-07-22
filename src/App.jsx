// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import { Route, Routes } from "react-router-dom";



function App({
  state,
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
}) {

  console.log(state.profilePage);
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper_content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                stateProfilePage={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
              />
            }
          />
          <Route
            path="/messages/*"
            element={
              <Dialogs
                state={state.dialogPage}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
              />
            }
          />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
