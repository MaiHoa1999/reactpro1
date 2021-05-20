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
};
export default CourseApi;
