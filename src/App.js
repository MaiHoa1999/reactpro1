import { Header, Nav, Footer, Login } from "./component";
import React, {useState,useEffect} from 'react'
import Home from "./page/home";
import Project from "./page/project";
import Register from "./page/register";
import TeamList from "./page/team";
import Error from "./page/error";
import Courses from "./page/courses";
import CourseDatail from "./page/course_detail";
import Fap from "./page/fap";
import Hoptac from "./page/hoptac";
import "./asset/style/custom.scss";
import Profile from "./page/profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListCourse from "./page/course_detail/component/ListCouse";
import Auth from "./service/auth";



export let Context = React.createContext({})

function App() {
  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login'))
  })
  useEffect(() => {
    localStorage.setItem('login',JSON.stringify(
      state.login
    ))
  }, [state.login])

 async function handlelogin(email,pass){
   try{
    let res= await Auth.login(email.pass)
    
    if(res.data){
          setState({
            ...state,
            login:res.data
          })
          return {
            success:true
          }
        }else if(res.error){
          return{
            error:res.error
          }
        }
        // setState({
        //   ...state,
        //   loginError: res.error
        // })
   }catch(err){

   }
   
  
  // .then((res)=>{
  //   return res.json()
  // })
  // .then((res)=>{
  //   if(res.data){
  //     setState({
  //       ...state,
  //       login:res.data
  //     })
  //   }else if(res.error)
  //   setState({
  //     ...state,
  //     loginError: res.error
  //   })
  // })
  //   .catch((err) =>{
  //     console.log(err)    })
  
    // if(email === 'admin@gmail.com' && pass === '123456'){
    //   setState({
    //     ...state,
    //     login:{
    //       name: 'mai hoa',
    //       avt: '/img/avt/png'
    //     }
    //   })
  
    // }
    // else{
    //   return 'sai thong tin';
    // }


  }
  function handleLogout(){
    setState({
      ...state,
      login: false
    })
    
  }
  
  return (
    <Context.Provider value={{...state,handlelogin, handleLogout}}>
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Login />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/project" component={Project}></Route>
          <Route path="/course" component={Courses}></Route>
          <Route path="/hoptac" component={Hoptac}></Route>
          <Route path="/profile" >
            <Profile />
          </Route>
          <Route path="/course/:slug" component={CourseDatail}></Route>
          <Route path="/team" component={TeamList}></Route>
          <Route path="/register" component={Register}></Route>

          <Route path="/fap" component={Fap}></Route>
          <Route component={Error}></Route>
        </Switch>
        {/* <Home/> */}
        {/* <Courses/> */}
        {/* <CourseDatail/> */}
        {/* <Error/> */}
        {/* <TeamList/> */}
        {/* <Project/> */}
        {/* <Register/> */}
        {/* <Hoptac/> */}
        {/* <Profile/> */}
        {/* <Fap/> */}
        <Footer />
      </div>
    </Router>
    </Context.Provider>
  );
}

export default App;
