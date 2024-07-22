let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi! It's my first post😘", likeCount: 600 },
        { id: 2, message: "I'm  sweet cat!", likeCount: 1 },
        { id: 2, message: "Kenny not dead!", likeCount: 909 },
      ],
      newPostText: "",
    },

    dialogPage: {
      dialogItem: [
        { id: 1, name: "John", sex: "male" },
        { id: 2, name: "M.Mouse", sex: "male" },
        { id: 3, name: "Freya", sex: "female" },
        { id: 4, name: "SweetCat", sex: "male" },
        { id: 5, name: "Beatrice", sex: "female" },
      ],
      message: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Who are you? Doesn't write to me anymore!" },
        { id: 3, message: "Let's go pick daisies!🌸" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subcribe(observer) {
    this._callSubscriber = observer;
  },


  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    debugger;
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogPage.newMessageText,
    };
    this._state.dialogPage.message.push(newMessage);
    this._state.dialogPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newMessage) {
    this._state.dialogPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  dispatch (action) {

  }
};


export default store;







