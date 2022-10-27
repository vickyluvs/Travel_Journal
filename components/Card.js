import React from "react"


function Card(props){
    return(
        
        <div>
            
            <div className="card">
                <div className="img--div">
                    <img src={props.imageUrl}className="card--img" alt="The six canada"/>
                </div>
                
                <section className="info--section">
                    <div className="location">
                        <img src="../assets/location.png" className="path--icon" alt="location icon"/>
                        <span>{props.location}</span>
                        <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                    </div>
                        <h1 className="location--title">{props.title}</h1>
                        <h4 className="date--stamp">{props.date}</h4>
                        <p className="about--location">{props.description}</p>
                </section>
            </div>
            
        
        </div>
    )
}

export default Card;