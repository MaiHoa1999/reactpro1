import { CourseItem } from "../../../component";

export default function ListCourse(){
    return(
        <section className="section-3">
          <div className="container">
            <div className="textbox">
              <h3 className="sub-title">DỰ ÁN</h3>
              <h2 className="main-title">Liên quan</h2>
            </div>
            <div className="list row">
            
            <CourseItem 
                name="Front-end căn bản"
                desc ="One of the best corporate fashion brands in Sydney"
                image = "img/img1.png"
                teacher_avt = "img/avt.png"
                teacher_name = "Trần Nghĩa 1"
                status = "da-ket-thuc"
                
            />
            <CourseItem 
                name="UX/UI Design"
                desc ="One of the best corporate fashion brands in Sydney"
                image = "img/img2.png"
                teacher_avt = "img/avt.png"
                teacher_name = "Trần Nghĩa 2"
                status = "sap-dien-ra"
                
            />
            <CourseItem 
                name="Laravel framework"
                desc ="One of the best corporate fashion brands in Sydney"
                image = "img/img3.png"
                teacher_avt = "img/avt.png"
                teacher_name = "Trần Nghĩa 3"
                status = "dang-dien-ra"
                
            />
            </div>
          </div>
        </section>

    )
}