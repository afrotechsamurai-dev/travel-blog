export default function Card(props){
    return (
        <div className="entry">
            <div className="card-left">
                <img src={props.image} alt={props.alt} className="card-img" />
            </div>
            <div className="card-right">
                <h4>{props.title}</h4>
                <span><img src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow=" alt="marker" className="marker"/></span>
                <span><a href={props.map}> View on Google Maps</a></span>
                <h4>{props.date}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}