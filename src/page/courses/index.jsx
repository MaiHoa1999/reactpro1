import { CourseItem } from "../../component";

export default function Courses(){
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
            <CourseItem 
                name="Front-end căn bản"
                desc ="One of the best corporate fashion brands in Sydney"
                image = "img/img4.png"
                teacher_avt = "img/avt.png"
                teacher_name = "Trần Nghĩa 4"
                status = "sap-dien-ra"
                
            />
            <CourseItem 
                name="Front-end nâng cao"
                desc ="One of the best corporate fashion brands in Sydney"
                image = "img/img5.png"
                teacher_avt = "img/avt.png"
                teacher_name = "Trần Nghĩa 5"
                status = "da-ket-thuc"
                
            />
            <CourseItem 
                name="Front-end căn bản"
                desc ="One of the best corporate fashion brands in Sydney"
                image = "img/img1.png"
                teacher_avt = "img/avt.png"
                teacher_name = "Trần Nghĩa 6"
                status = "sap-dien-ra"
                
            />
          
          </div>
        </div>
      </section>
    </main>
    )
}