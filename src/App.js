import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";






const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar state={props.state.siteBar}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={() => <Dialogs state={props.state.dialogsPage} sendMessage={props.sendMessage} updateTextareaMessages={props.updateTextareaMessages}/>}/>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}
                                                        updateTextareaMyPostsData={props.updateTextareaMyPostsData}/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;