import React, {useState, useEffect} from "react";
import axios from "axios";
import {dates} from "../../data";
import NasaCard from "./nasaCard";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import moment from "moment";

// const Button = styled.button`
//     margin: 1rem;
//     color: white;
//     `;

const Card = styled.div`
    margin: 2rem;
    border: black 5px solid;
    padding: 0 2rem;
    `;



export default function Info() {
    const [currentImage, setImage] = useState([]);
    const [currentDate, setDate] = useState(dates[0]);
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=BPmJ2myQ1el3m7HNlXzh245wa5N8IivsOUDxtuSC${"&date=" + currentDate}`)
            .then(response => {
                console.log(response.data);
                setImage([response.data]);
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }, [currentDate]);
    return (
        <div>

                <Button variant="primary" onClick={() => setDate(dates[0])} >{dates[0]}</Button>
                <Button variant="secondary" onClick={() => setDate(dates[1])} >{dates[1]}</Button>
                <Button variant="dark" onClick={() => setDate(dates[2])} >{dates[2]}</Button>
                <Button onClick={() => setDate(dates[3])} >{dates[3]}</Button>
                <Button onClick={() => setDate(dates[4])} >{dates[4]}</Button>
                <Button onClick={() => setDate(dates[5])} >{dates[5]}</Button>
                <Button onClick={() => setDate(dates[6])} >{dates[6]}</Button>

            <Card>
                {currentImage.map((photo, index) => (
                    <NasaCard
                        key={index}
                        title={photo.title}
                        hdurl={photo.hdurl}
                        explanation={photo.explanation}
                        date={photo.date}
                    />
                ))}
            </Card>
        </div>
    )
};


