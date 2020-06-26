import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/layout/Dashboard";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Alert from "./components/layout/Alert";

//Redex imports
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [sidebarOpen, switchSidebar] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Sidebar isOpen={sidebarOpen} onSetOpen={switchSidebar} />
          <Topbar isOpen={sidebarOpen} onSetOpen={switchSidebar} />
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/posts/id' component={Post} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
