import { CourseItem } from "../../component";
import {useState,useEffect} from 'react'
import CourseApi from '../../service/course'

export default function Courses(){
  let [state, setState] =useState({
    offline:[],
    online:[]
  })

  useEffect(async() => {
    let res = await CourseApi.home();
    // console.log(`res`, res)
    setState({
      online: res.online,
      offline:res.offline
    })
    console.log(`res`, res)
    
}, [])
    return(
        
      <main className="homepage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">KHÓA HỌC CFD</h2>
          <p className="top-des">
            The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has
            a more-or-less normal
          </p>
          <div className="textbox">
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">ONLINE</h2>
          </div>
          <div className="list row">
          {
              state.offline.map((value,i) => <CourseItem
              key={value.slug}
              {...value}
              />
              )}
         
          </div>
        </div>
      </section>
    </main>
    )
}