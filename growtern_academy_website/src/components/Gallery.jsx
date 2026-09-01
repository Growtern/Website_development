import React, { useState } from "react";
import "../Styles/Gallery.css";

// Import images
import image1 from "../assets/Images/Online.jpg";
import image3 from "../assets/Images/Online_classes_gallery2.jpg";
import image4 from "../assets/Images/Online_slasses_gallery4.jpg";
import image6 from "../assets/Images/Online_classes_Gallery5.jpg";
import image8 from "../assets/Images/live_training_ses.jpeg"
import image9 from "../assets/Images/Online_classes_galler8.jpeg";
import image10 from "../assets/Images/Online_classes_galler9.jpeg";
import image12 from "../assets/Images/Online_classes_galler11.jpeg";


const images = [
    { src: image1, title: "Class in Zoom Meet" },
    { src: image3, title: "Training Time" },
    { src: image4, title: "Class Time" },
    { src: image6, title: "Intenship" },
    { src: image8, title: "Live One to One" },
    { src: image9, title: "Intenship" },
    { src: image10, title: "Intenship" },
    { src: image12, title: "Intenship" },
  ];

const Gallery = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Arrow functions for navigation
  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  return (
    <section className="Gallery-Section">
      <div className="container p-0">
        <h2 className="gallery-title">
         <span style={{ color: "#f3a840ff" }}>Classroom  </span>Moments
        </h2>

        {/*  Desktop Grid View */}
        <div className="gallery-grid desktop-view">
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.src} alt={img.title} />
              <div className="overlay">
                <p>{img.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/*  Mobile Slider View */}
        <div className="mobile-slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="slide"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.src} alt={img.title} />
                <p className="text-light mt-2">{img.title}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <button className="next-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content">
              <button
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <p>{selectedImage.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
