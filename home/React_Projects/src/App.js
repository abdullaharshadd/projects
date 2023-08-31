import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Loading from "./components/common/Loading";
import PrivateRoute from "./components/common/PrivateRoute";

import Context from "./context";

const App = () => {
  const [cometChat, setCometChat] = useState(null);

  const values = { cometChat };

  useEffect(() => {
    initCometChat();
  }, []);

  const initCometChat = async () => {;
    
    const { CometChat } = await import("@cometchat-pro/chat");
    const appID = `${process.env.REACT_APP_COMETCHAT_APP_ID}`;
    const region = `${process.env.REACT_APP_COMETCHAT_REGION}`;
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(region)
      .build();
    CometChat.init(appID, appSetting).then(
      () => {
        console.log("CometChat was initialized successfully");
        setCometChat(() => CometChat);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Context.Provider value={values}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
      <Loading />
    </Context.Provider>
  );
};

export default App;