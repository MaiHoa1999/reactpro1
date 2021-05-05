import ProjectItem from './component/ProjectItem'
export default function Project(){
    return(
        <main className="projectpage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">dự án</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
              luctus
            </p>
            <div className="list row">
            <ProjectItem
                name=" furnitown"
                desc= "Hoàn thành với Trần Nghĩa "
                image = "img/project/project (1).jpg "

            />
            <ProjectItem
                name=" kymco"
                desc= "Hoàn thành với Huỳnh Tiến Tài "
                image = "img/project/project (2).jpg"

            />
             
            </div>
            <div className="bottom">
              <div className="btn overlay round btn-more">
                tải thêm
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}