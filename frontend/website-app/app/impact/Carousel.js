"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

/**
 * This component renders a carousel of images. It takes an array of objects as a prop,
 * where each object contains an `img` property and a `title` property. The component
 * will render the image at the current index, and the title for that image. The component
 * also renders two buttons, one for going to the previous image and one for going to the
 * next image. The component will automatically change the image every 2.5 seconds unless
 * the user hovers over the component, in which case the auto-play is paused.
 *
 * @param {object[]} data - An array of objects, where each object contains an `img` property
 * and a `title` property.
 */
export default function Carousel({ data }) {
  /**
   * This state variable keeps track of the current index of the image to be displayed.
   * It is initialized to 0, which means the first image in the array will be displayed
   * when the component is first rendered.
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * This state variable keeps track of whether the component should be faded out or not.
   * It is used to create a fade-in/fade-out animation when the image changes.
   */
  const [fade, setFade] = useState(false);

  /**
   * This state variable keeps track of whether the auto-play should be paused or not.
   * It is used to pause the auto-play when the user hovers over the component.
   */
  const [pauseAutoPlay, setPauseAutoPlay] = useState(false);

  /**
   * This useEffect hook is used to create an interval that will change the current index
   * every 2.5 seconds, unless the user is hovering over the component. When the user
   * hovers over the component, the auto-play is paused.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseAutoPlay) {
        /**
         * This line of code changes the current index to the next index in the array,
         * unless the current index is the last index in the array, in which case it
         * wraps around to the first index.
         */
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        /**
         * This line of code sets the fade state to true, which will cause the component
         * to fade out the current image and fade in the new image.
         */
        setFade(true);
      }
    }, 2500);
    /**
     * This line of code returns a function that will be called when the component is
     * unmounted. The function clears the interval, which prevents the interval from
     * continuing to run even after the component is unmounted.
     */
    return () => clearInterval(interval);
  }, [pauseAutoPlay, data.length]);

  /**
   * This function is called when the user clicks the "Next" button. It changes the
   * current index to the next index in the array, and sets the pauseAutoPlay state
   * to false, which will cause the auto-play to resume.
   */
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setPauseAutoPlay(false);
  };

  /**
   * This function is called when the user clicks the "Previous" button. It changes the
   * current index to the previous index in the array, and sets the pauseAutoPlay state
   * to false, which will cause the auto-play to resume.
   */
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : (prevIndex - 1) % data.length
    );
    setPauseAutoPlay(false);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPauseAutoPlay(true)}
      onMouseLeave={() => setPauseAutoPlay(false)}
    >
      {data && data.length > 0 && data[currentIndex] ? (
        <>
          <Image
            src={data[currentIndex].img}
            alt="carousel-img"
            className={`carousel-img ${fade ? "fade" : ""}`}
            width={1200}
            height={600}
          />
          <div className="carousel-details">
            <h2 className="carousel-title">
              {data[currentIndex].title || "Title"}
            </h2>

          </div>
        </>
      ) : (
        <p>No images available</p>
      )}
      <button className="carousel-button prev-button" onClick={handlePrev}>
        Prev
      </button>
      <button className="carousel-button next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

