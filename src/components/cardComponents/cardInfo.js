import React, {useState, useEffect} from "react";
import axios from "axios";
import {dates} from "../../data";
import NasaCard from "./nasaCard";

export default function Info() {
    const [currentImage, setImage] = useState([]);
    const [currentDate, setDate] = useState(dates[0]);
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${"&date=" + currentDate}`)
            .then(response => {
                console.log(response.data);
                setImage([response.data]);
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }, []);
    return (
        <div className="cardIn">
            {currentImage.map((photo, index) => (
                <NasaCard
                key={index}
                title={photo.title}
                hdurl={photo.hdurl}
                explanation={photo.explanation}
                date={photo.date}
                />
            ))}
        </div>
    )
};


