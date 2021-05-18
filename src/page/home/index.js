
import Banner from './component/Banner'
import CourseList from './component/CourseList'
import Special from './component/Special'
import Testimonial from './component/Testimonial'
import Gallery from './component/Gallery'
import Action from './component/Action'
import CourseApi from '../../service/course'
import { useState, useEffect } from 'react'
export default function Home(){
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
  // console.log("off",list.offline)
    return(
        <main className="homepage" id="main">
        <Banner />
        <CourseList offline={state.offline} online={state.online}/>
        <Special />
        <Testimonial/>
        <Gallery/>
        <Action/>
        
        
      </main>
    )
}
