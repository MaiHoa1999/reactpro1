import { CourseItem } from "../../../component";

export default function Relate({data}){
    
    return(
        <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
          {
            data?.map((value,i) => <CourseItem
            key={value.slug}
            {...value}
            />
            )}
        <CourseItem/>
          </div>
          </div>
        
      </section>
    )
}