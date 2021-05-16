import {endpoint} from './config'

const CourseApi={
    list(){
        return  fetch(`${endpoint}/elearning/v4/login`,{
            method: "GET",
          }).then(res => res.json())
    }
}
export default CourseApi