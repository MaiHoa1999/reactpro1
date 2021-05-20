const courseDetail={
    course(slug){
        return fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`).then(res=> res.json())
    }

}
export default courseDetail