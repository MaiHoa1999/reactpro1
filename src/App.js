import { Header, Nav, Footer, Login } from "./component";
import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
import Home from "./page/home";
import Project from "./page/project";
import Register from "./page/register";
import TeamList from "./page/team";
import Error from "./page/error";
import Courses from "./page/courses";
import CourseDetail from "./page/course_detail";
import Fap from "./page/fap";
import Hoptac from "./page/hoptac";
import "./asset/style/custom.scss";
import Profile from "./page/profile";
import { PrivateRoute } from "./component/PrivateRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux";

export let Context = React.createContext({});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <Login />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/project" component={Project}></Route>
            <Route exact path="/course" component={Courses}></Route>
            <Route path="/hoptac" component={Hoptac}></Route>
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/course/:slug" component={CourseDetail}></Route>
            <Route path="/team" component={TeamList}></Route>
            <Route path="/register" component={Register}></Route>

            <Route path="/fap" component={Fap}></Route>
            <Route component={Error}></Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
