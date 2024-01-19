import React, { useEffect, useState } from 'react'

export default function Home() {

    const [currSlide, setCurrSlide] = useState(0);

    const images = [
        '/images/image1.png',
        '/images/image2.png',
        '/images/image3.png',
        '/images/image4.png',
        '/images/image5.png'
    ]

    const totalSlides = images.length;

    const showSlide = (index) => {
        if(index < 0)
        setCurrSlide(totalSlides-1)
        else if(index >= totalSlides)
        setCurrSlide(0)
        else
        setCurrSlide(index)
    };

    const nextSlide = () => {
        showSlide(currSlide+1)
    };

    const prevSlide = () => {
        showSlide(currSlide-1)
    };

    useEffect(() => {
        // Automatically advance slides every 10 seconds
        const intervalId = setInterval(nextSlide, 4000);
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    },[currSlide]);

  return (
    <div className="home">
        <h1 className='text-center'><b>Today's News</b></h1>
        <div className="slider-container">
        <div className="slides" style={{ transform: `translateX(${-currSlide * 100}%)` }}>
            {images.map((image, index) => (
            <div key={index} className="slide">
                {console.log(image)}
                <img src={image} alt={`Slide ${index + 1}`} />
            </div>
            ))}
        </div>
        <div className="arrow prev" onClick={prevSlide}>&#8249;</div>
        <div className="arrow next" onClick={nextSlide}>&#8250;</div>
        </div>
    </div>
  )
}
