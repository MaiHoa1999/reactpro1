import { CourseItem } from "../../component";
import Content from "./component/Content";
import Info from "./component/Info";
import ListCourse from "./component/ListCouse";

export default function CourseDatail(){
    return(
        
        <main className="course-detail" id="main">
       
           {/* info */}
           <Info/>
            {/* content */}
            <Content/>
            {/* list course lien quan */}
            <ListCourse/>
       
      </main>
      
    )
}