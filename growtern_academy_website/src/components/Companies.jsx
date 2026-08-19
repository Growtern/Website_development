import React from "react";

import "../Styles/Compnies.css";

//import All images
import Tcs from "../assets/Images/Tcs.png";
import Amazon from "../assets/Images/Amazon.png";
import Delta from "../assets/Images/Delta.png";
import Infosys from "../assets/Images/Infosys.png";
import Wipro from "../assets/Images/Wipro.png";
import TechNext from "../assets/Images/TechNext.png";
import Globaltreding from "../assets/Images/Globaltreding.png";
import Flipcart from "../assets/Images/Flipcart.png";

import Marquee from "react-fast-marquee";

const AutoScrolling = () => {
    const logos = [
        Tcs,
        Amazon,
        Delta,
        Infosys,
        Wipro,
        TechNext,
        Globaltreding,
        Flipcart,
    ];

    return (
        <>
            <section className="Companies-section">
                <div className="container ">
                    <div className="row p-0 ">
                        <div className="col-md-12  p-0">
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <h3 className="Top-Companies ">
                                    <span style={{ color: "#F39001" }}>500+ </span>Top Companies Hiring At<span style={{ color: "#F39001" }}> GROWTERN</span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 p-0">
                            <div>
                                {/* <div className="Slider">
                                    <div className="Slider-Track">
                                        <div className="Slide">
                                            <img src={Tcs} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Amazon} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Delta} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Infosys} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Wipro} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={TechNext} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Globaltreding} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Flipcart} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Tcs} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Amazon} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Delta} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Infosys} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Wipro} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={TechNext} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Globaltreding} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Flipcart} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Tcs} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Amazon} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Delta} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Infosys} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Wipro} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={TechNext} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Globaltreding} alt="CompaniName" />
                                        </div>
                                        <div className="Slide">
                                            <img src={Flipcart} alt="CompaniName" />
                                        </div>
                                    </div>
                                </div> */}
                                <Marquee
                                    speed={40}
                                    gradient={false}
                                    pauseOnHover={true}
                                    autoFill={true}
                                >
                                    {logos.map((logo, index) => (
                                        <div
                                            key={index}
                                            className="d-flex align-items-center justify-content-center mx-4"
                                        >
                                            <img
                                                src={logo}
                                                alt="Company Logo"
                                                style={{
                                                    height: "50px",
                                                    // width: "auto",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AutoScrolling;  
