
import Banner from './component/Banner'
import CourseList from './component/CourseList'
import Special from './component/Special'
import Testimonial from './component/Testimonial'
import Gallery from './component/Gallery'
import Action from './component/Action'
import CourseApi from '../../service/course'
import { useState, useEffect } from 'react'
export default function Home(){
  let [list, setList] =useState({
    offline:[],
    online:[]
  })
  useEffect(() => {
    CourseApi.list()
    .then(res =>{
        setList(res)
        // console.log(res)
    })

  }, [])
    return(
        <main className="homepage" id="main">
        <Banner />
        <CourseList {...list}/>
        <Special />
        <Testimonial/>
        <Gallery/>
        <Action/>
        
        
      </main>
    )
}
