import React from "react";
import "../Styles/Traineer.css";

// Import All Images
import Jyoti from "../assets/Images/Jyoti Ranjan Dhala .jpeg"
import Antaryami from "../assets/Images/Antaryami Behera.jpeg"
import Swarupa from "../assets/Images/Swaroopa Swain.jpeg"
import silsila from "../assets/Images/Silsila Patra.jpeg"
import subhangi from "../assets/Images/Subhangi Saha.jpeg"

const images = [
    {
        id: 1,
        Photo: Jyoti,
        Name: "Jyoti Ranjan Dhala",
        Role: "Assistance System Engineer",
        message: "Skilled in system engineering and IT support with expertise in ensuring seamless infrastructure operations."
    },
    {
        id: 2,
        Photo: Antaryami,
        Name: "Antaryami Behera",
        Role: "Software Engineer",
        message: "Passionate software engineer specializing in MERN stack development and scalable web applications."
    },
    {
        id: 3,
        Photo: silsila,
        Name: "Silsila Patra",
        Role: "Software Engineer",
        message: "Dedicated software engineer focusing on modern web technologies and innovative solutions."
    },
    {
        id: 4,
        Photo: subhangi,
        Name: "Subhangi Saha",
        Role: "Cloud Solution Architect",
        message:"Expert in cloud computing and solution architecture, delivering scalable and secure cloud strategies."
    },
];

const Gallery = () => {
    return (
        <section className="Traineer-Section">
            <div className="container">
                <h2 className="Trainers-heading text-center mb-5">Our Professional <span style={{color:"#f28d3fff"}}>Trainers</span></h2>
                <div className="row">
                    <div className="col-md-3 gallery-container ">
                    {images.map((img) => (
                        <div key={img.id} className="gallery-item">
                            <div className="img-box">
                                <img src={img.Photo} alt={img.Name} />
                            </div>
                            <div className="info">
                                <p>{img.Name}</p>
                                <p>{img.Role}</p>
                            </div>
                            <div className="caption">
                                <p> {img.message} </p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
