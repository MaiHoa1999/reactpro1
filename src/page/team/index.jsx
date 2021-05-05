import TeamItem from "./component/TeamItem";

export default function TeamList(){
    return(
        <main className="team" id="main">
        <section>
          <div className="container">
            <div className="top">
              <h2 className="main-title">cfd team</h2>
              <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                elementum
                sem non luctus
              </p>
            </div>
            <div className="list row">
                <TeamItem 
                    name = " trần nghĩa"
                    desc = "Founder & Creative Front-End Developer"
                    image = "img/thumb-member.jpg"
                />
                <TeamItem 
                    name = "  đặng thuyền vương"
                    desc = "Co-Founder & Fullstack Developer"
                    image = "img/thumb-member.jpg"
                />
                <TeamItem 
                    name = "  đặng thuyền quân"
                    desc = "Founder & Creative Front-End Developer"
                    image = "img/thumb-member.jpg"
                />
                <TeamItem 
                    name = "  đặng thuyền quân"
                    desc = "Founder & Creative Front-End Developer"
                    image = "img/thumb-member.jpg"
                />
               
            </div>
          </div>
        </section>
      </main>
    )
}