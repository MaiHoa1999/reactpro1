export default function TeamItem({name, desc, image}){
    return(
        <div className="item col-md-6 col-sm-6">
        <div className="wrap">
          <div className="cover">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <div className="name">
              {name}
            </div>
            <p className="title">{desc}</p>
          </div>
        </div>
      </div>
    )
}