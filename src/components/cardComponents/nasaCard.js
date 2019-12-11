import React from "react";

const NasaCard = props => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src={props.hdurl} alt="url of image"/>
            <div className="desc">
                <p>{props.explanation}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
};
export default NasaCard;