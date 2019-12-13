import React from "react";
import {dates} from "../../data";

const NasaCard = props => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src={props.hdurl} alt="url"/>
            <div className="desc">
                <p>{props.explanation}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
};
export default NasaCard;