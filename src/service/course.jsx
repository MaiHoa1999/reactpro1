const CourseApi = {
    home(){
        return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home").then(res=> res.json())
    }
}
export default CourseApi