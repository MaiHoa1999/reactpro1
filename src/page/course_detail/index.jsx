import { CourseItem } from "../../component";
import Content from "./component/Content";
import Info from "./component/Info";
import ListCourse from "./component/ListCouse";
import {useState,useEffect} from 'react'
import CourseApi from '../../service/course'

export default function CourseDatail(){
    let [state, setState] =useState({
        offline:[],
        online:[]
      })

      useEffect(async() => {
        let res = await CourseApi.home();
        setState({
          online: res.online,
          offline:res.offline
        })
        console.log(`res`, res)
        
    }, [])
    return(
        
        <main className="course-detail" id="main">
       
           {/* info */}
           <Info/>
            {/* content */}
            <Content  offline={state.offline} online={state.online}/>
            {/* list course lien quan */}
            <ListCourse/>
       
      </main>
      
    )
}