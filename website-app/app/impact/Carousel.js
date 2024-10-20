"use client";
import React, {useState, useEffect} from "react"
import Image from "next/image.js";

export default function Carousel({data}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [pauseAutoPlay, setPauseAutoPlay] = useState(false);

    // Creating the auto play functionality.
    useEffect(() =>{
        const interval = setInterval(() =>{
            !pauseAutoPlay && setCurrentIndex((prevIndex)=>(prevIndex + 1) % data.length);
            setFade(true);
        }, 2500); 
        return() => clearInterval(interval);
    });

    // Next and prev functions
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setPauseAutoPlay(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % data.length);
        setPauseAutoPlay(false);
    };
    return(
        <div className="carousel">
            {/* Images for the Carousel. */}
            <Image src={data[currentIndex].img} alt="carousel-img " className={"carousel-img" + (fade && "fade")} 
            width={800} height={600}/>
            <div className="carousel-details">
                <h2 className="carousel-title"> {data[currentIndex].title ? data[currentIndex].title: "Title"}</h2>
            </div>
            {/* Buttons for the carousel */}
            <button className="carousel-button prev-button" onClick={handlePrev}>{" "} Prev </button>
            <button className="carousel-button next-button" onClick={handleNext}>{" "} Next </button>
        </div>
    );
}