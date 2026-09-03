import React from 'react';
import img from "../assets/Images/journey.png";
import img2 from "../assets/Images/journey_mobile.png";

const DottedCourseFlow = () => {
  return (
    <section className="py-3">

      {/* Desktop Learning Journey */}
      <img
        src={img}
        alt="Our Learning Journey"
        className="img-fluid w-100 d-none d-md-block"
      />

      {/* Mobile Learning Journey */}
      <img
        src={img2}
        alt="Our Learning Journey"
        className="img-fluid w-100 d-block d-md-none"
      />

    </section>
  );
};

export default DottedCourseFlow;