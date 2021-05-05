import { Header , Nav,Footer} from './component'

import Home from './page/home'
import Project from './page/project';
import Register from './page/register'
import TeamList from './page/team';
import Error from './page/error'
import Courses from './page/courses';
import CourseDatail from './page/course_detail';
import Fap from './page/fap';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      {/* <Home/> */}
      {/* <Courses/> */}
      {/* <CourseDatail/> */}
      {/* <Error/> */}
      {/* <TeamList/> */}
      {/* <Project/> */}
      {/* <Register/> */}
      <Fap/>
      <Footer/>
    </div>
  );
}

export default App;
