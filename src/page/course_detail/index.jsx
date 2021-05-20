import { CourseItem } from "../../component";
import Content from "./component/Content";
import Info from "./component/Info";
import {useState,useEffect} from 'react'
import courseDetail from '../../service/courseDetail'
import { useParams } from "react-router";
import CourseApi from "../../service/course";
import Relate from "./component/Related";

export default function CourseDetail(){
  let {slug} = useParams()
  console.log(`slug`, slug)
  let [state, setState] =useState()
  let [related, setRelated] =useState()

      useEffect(async() => {
        let res = await courseDetail.course(slug);
        let res2 = await CourseApi.relatedCourse(slug)
        console.log(`res`, res)
        console.log(`res2`, res2)
       setState(res)
       setRelated(res2)
        
    }, [slug])
 

  console.log(`related`, related)
    return(
        
        <main className="course-detail" id="main">
       
           <Info {...state?.data}/>
        
            <Content  {...state?.data}/>
            {/* list course lien quan */}
           <Relate
             {...related}
           />
           
       
      </main>
      
    )
}