import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, sendMessage, subscribe, updateTextareaMessages, updateTextareaMyPostsData} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
             addPost={addPost}
             updateTextareaMyPostsData={updateTextareaMyPostsData}
             sendMessage={sendMessage}
             updateTextareaMessages={updateTextareaMessages}/>
      </React.StrictMode></BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
