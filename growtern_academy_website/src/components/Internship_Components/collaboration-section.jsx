import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Internship_styles/collaboration-section.css";
import collaborationsData from "../../data/Colabrations";

const Collaboration = () => {
  const sliderRef = useRef();
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsAtStart(slider.scrollLeft <= 5);
    setIsAtEnd(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", updateScroll);
    updateScroll();
    return () => slider.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollLeft = () => {
    const card = sliderRef.current.querySelector(".collab-card");
    sliderRef.current.scrollBy({
      left: -(card.offsetWidth + 20),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const card = sliderRef.current.querySelector(".collab-card");
    sliderRef.current.scrollBy({
      left: card.offsetWidth + 20,
      behavior: "smooth",
    });
  };

  return (
    <section className="collab-section">
      <div className="container p-0">

        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="collab-heading ">
            Our Recent <span>Collaborations</span>
          </h2>
          <p className="collab-description">
            We partner with top industry leaders to create career-driven training and real hiring opportunities for students and institutions.
          </p>
        </div>

        {/* Slider */}
        <div className="position-relative">

          <button
            className="collab-arrow left"
            onClick={scrollLeft}
            disabled={isAtStart}
          >
            ❮
          </button>

          <div className="collab-slider d-flex py-3" ref={sliderRef}>
            {[
              ...collaborationsData,
              ...collaborationsData, // duplicate the same cards
            ].map((item, index) => (
              <div className="collab-card card border-0 pb-3" key={index}>
                <div className="collab-image">
                  <img src={item.image} alt={item.company2} />
                </div>

                <div className="card-body text-center p-0 mt-2">
                  <h5 className="collab-card-title">{item.company2}</h5>

                  <Link
                    to={`/collabration-detailspage/${item.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="btn collab-btn mb-0"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>


          <button
            className="collab-arrow right"
            onClick={scrollRight}
            disabled={isAtEnd}
          >
            ❯
          </button>

        </div>

      </div>
    </section>
  );
};

export default Collaboration;
