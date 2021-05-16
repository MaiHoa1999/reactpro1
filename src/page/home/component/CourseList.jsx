
import {CourseItem }from '../../../component'
export default function CourseList({online,offline}){
    return(
  
        <div>
              <section className="section-courseoffline">
          <div className="container">
            <p className="top-des">
              The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
              has
              a more-or-less normal
            </p>
            <div className="textbox">
              <h2 className="main-title">Khóa học Offline</h2>
            </div>
            <div className="list row">
            {
              offline.map((value,i) => <CourseItem 
              key={value.slug}
              {...value}
              />
              )

                // name="Front-end căn bản"
                // desc ="One of the best corporate fashion brands in Sydney"
                // image = "img/img1.png"
                // teacher_avt = "img/avt.png"
                // teacher_name = "Trần Nghĩa 1"
                // status = "da-ket-thuc"
                
            // />
            }
            {/* <CourseItem 
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
                
            /> */}
          
            </div>
          </div>
        </section>
        <section className="section-courseonline section-blue">
          <div className="container">
            <div className="textbox">
              <h2 className="main-title">Khóa học Online</h2>
            </div>
            <div className="list row">
            {
              online.map((value,i) => <CourseItem 
              key={value.slug}
              {...value}
              />
              )
              }
            {/* <CourseItem 
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
                
            /> */}
            </div>
            <div className="text-deco">C</div>
          </div>
        </section>
        </div>
    )
}
