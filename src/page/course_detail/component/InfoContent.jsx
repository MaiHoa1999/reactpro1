export default function InfoContent({index,title}){
    return(
        <div className="accordion">
        <div className="accordion__title">
          <div className="date">Ngày{index +1}</div>
          <h3>{title}</h3>
        </div>
        <div className="content">
          I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
          some tangible benefits over alternatives like VueJS for simple page interactions.
        </div>
      </div>
    )
}