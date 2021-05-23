import Auth from "./auth";

const CourseApi = {
  home() {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home").then(
      (res) => res.json()
    );
  },
  course() {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/courses").then(
      (res) => res.json()
    );
  },
  relatedCourse(slug) {
    return fetch(
      `http://cfd-reactjs.herokuapp.com/elearning/v4/course-related/${slug}`
    ).then((res) => res.json());
  },
 async registerCoure(slug,data){
    let token  = JSON.parse(localStorage.getItem("token"))?.accessToken
     
    let res = await fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course-register/${slug}`,{
      method:'POST',
      headers:{
       'Content-Type':'application/json',
       Authorization: `Bearer ${token}`
     },
     body:JSON.stringify(data),
     })
     if (res.status ===200) {
       return res.json()
     }
     if (res.status === 403) {
      await Auth.refreshToken()
      let token  = JSON.parse(localStorage.getItem("token"))?.accessToken

      return fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course-register/${slug}`,{
        method:'POST',
        headers:{
         'Content-Type':'application/json',
         Authorization: `Bearer ${token}`
       },
       body:JSON.stringify(data),
      
      }).then.apply(res => res.JSON())
     }
  },

};
export default CourseApi;
