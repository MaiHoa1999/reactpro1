export default function ProJect({name,desc,image}){
    return(
        <a href="#" className="item col-md-6">
                <div className="wrap">
                  <div className="cover">
                    <img src={image} alt="" />
                  </div>
                  <div className="info">
                    <div className="name">{name}</div>
                    <div className="makeby">{desc} </div>
                  </div>
                </div>
        </a>
    )
}