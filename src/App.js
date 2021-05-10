import { Header , Nav,Footer} from './component'

import Home from './page/home'
import Project from './page/project';
import Register from './page/register'
import TeamList from './page/team';
import Error from './page/error'
import Courses from './page/courses';
import CourseDatail from './page/course_detail';
import Fap from './page/fap';
import Hoptac from './page/hoptac';
import './asset/style/custom.scss'
import Profile  from './page/profile';
import {  BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {
  return (
     <Router>
    <div className="App">
      <Header />
      <Nav/>
      <Switch>
        <Route  exact path="/" component={Home}></Route>
        <Route path="/project" component={Project}></Route>
        <Route path="/course" component={Courses}></Route>
        <Route path="/hoptac" component={Hoptac}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/courseDatail" component={CourseDatail}></Route>
        <Route path="/team" component={TeamList}></Route>
        <Route path="/register" component={Register}></Route>
    
        <Route path="/fap" component={Fap}></Route>
        <Route  component={Error}></Route>

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
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
