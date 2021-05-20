import { Header, Nav, Footer, Login } from "./component";
import { Provider} from 'react-redux'
import React, {useState,useEffect} from 'react'
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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "./service/auth";
import store from './redux'

export let Context = React.createContext({})

function App() {
  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem("login")) || false,
    data:  JSON.parse(localStorage.getItem("data")) || {},
  })
  useEffect(() => {
    localStorage.setItem('login',JSON.stringify(
      state.login
    ))
  }, [state.login])

 async function handlelogin(form){
   try{
    let res = await Auth.login(form)
    
    if(res.data){
          setState({
            ...state,
            login: true,
            data: res.data
          })
      localStorage.setItem("login", JSON.stringify(state.login))
      localStorage.setItem("data", JSON.stringify(res.data))

          return {
            success:true
          }
        }else if(res.error){
          return{
            error:res.error
          }
        }
      
   }catch(err){

   }
   

  }
  function handleLogout(){
    setState({
      ...state,
      login: false
    })
    
  }
  
  return (
    <Provider store ={store}>
    <Context.Provider value={{...state,handlelogin, handleLogout}}>
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
          <Route path="/profile" >
            <Profile />
          </Route>
          <Route path="/course/:slug" component={CourseDetail}></Route>
          <Route path="/team" component={TeamList}></Route>
          <Route path="/register" component={Register}></Route>

          <Route path="/fap" component={Fap}></Route>
          <Route component={Error}></Route>
        </Switch>
       
        <Footer />
      </div>
    </Router>
    </Context.Provider>
    </Provider>
  );
}

export default App;
