import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaWalking,
  FaPhoneAlt,
  FaUtensils,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Chip from "@mui/material/Chip";

const HostelNearMe = [
  {
    id: 1,
    type: "boys",
    hostelName: "Lucky Hostel",
    price: "₹6,500 / Month",
    distance: "350 m from Growtern Academy",
    mobile: "+91 9876543210",
    foodAvailable: true,
    googleMap: "https://maps.app.goo.gl/1sU9sGt1YifTgvU16",
  },
  {
    id: 2,
    type: "girls",
    hostelName: "Swernapuri Girl's Hostel",
    price: "₹7,200 / Month",
    distance: "700 m from Growtern Academy",
    mobile: "+91 9876543210",
    foodAvailable: false,
    googleMap: "https://maps.app.goo.gl/VyjfPMfBRvBGF8M48",
  },
  {
    id: 3,
    type: "boys",
    hostelName: "Somli Hostel",
    price: "₹7,200 / Month",
    distance: "700 m from Growtern Academy",
    mobile: "+91 9876543210",
    foodAvailable: true,
    googleMap: "https://maps.app.goo.gl/Lz89wxdLxMhxAxuo9",
  },
];

const HostelNearMePage = () => {
    const [hostelType, setHostelType] = useState("boys");

    const filteredHostels = HostelNearMe.filter(
        (hostel) => hostel.type === hostelType
    );

    return (
        <section className="py-5 bg-white">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Find
                        <span style={{ color: "#F39001" }}>
                            {" "}
                            Hostels Near Us
                        </span>
                    </h2>

                    <p
                        className="mx-auto"
                        style={{
                            maxWidth: "700px",
                        }}
                    >
                        Comfortable, affordable and conveniently located hostels
                        within walking distance of Growtern Academy.
                    </p>

                    {/* Tabs */}

                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">

                        <Chip
                            label="Boys Hostel"
                            clickable
                            onClick={() => setHostelType("boys")}
                            sx={{
                                width: { xs: "100%", sm: 280 },
                                py: 2.5,
                                // height: 54,
                                borderRadius: "999px",
                                fontWeight: 700,
                                fontSize: "1rem",
                                bgcolor:
                                    hostelType === "boys"
                                        ? "#009FE3"
                                        : "#fff",
                                color:
                                    hostelType === "boys"
                                        ? "#fff"
                                        : "#009FE3",
                                border: "2px solid #009FE3",
                                transition: ".25s",
                                "&:hover": {
                                    bgcolor: "#009FE3",
                                    color: "#fff",
                                },
                            }}
                        />

                        <Chip
                            label="Girls Hostel"
                            clickable
                            onClick={() => setHostelType("girls")}
                            sx={{
                                width: { xs: "100%", sm: 280 },
                                 py: 2.5,
                                // height: 54,
                                borderRadius: "999px",
                                fontWeight: 700,
                                fontSize: "1rem",
                                bgcolor:
                                    hostelType === "girls"
                                        ? "#F39001"
                                        : "#fff",
                                color:
                                    hostelType === "girls"
                                        ? "#fff"
                                        : "#F39001",
                                border: "2px solid #F39001",
                                transition: ".25s",
                                "&:hover": {
                                    bgcolor: "#F39001",
                                    color: "#fff",
                                },
                            }}
                        />

                    </div>

                </div>

                {/* Cards */}
                <div className="row justify-content-center g-4">
                    {filteredHostels.map((hostel) => (
                        <div
                            className="col-lg-4 col-md-4"
                            key={hostel.id}
                        >
                            <div
                               className="bg-white rounded-4 h-100 p-3"
                                style={{
                                    border: "1px solid #edf2f7",
                                    boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                                    transition: "all .3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 18px 40px rgba(0,0,0,.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 12px 30px rgba(0,0,0,.08)";
                                }}
                            >

                                {/* Hostel Name */}
                                <h6 className="fw-bold mb-3">
                                    <FaMapMarkerAlt
                                        style={{
                                            color: "#F39001",
                                            marginRight: "10px",
                                            fontSize: "15px",
                                        }}
                                    />
                                    {hostel.hostelName}
                                </h6>

                                {/* Price */}
                                <div className="d-flex align-items-center mb-3">

                                    <div
                                        className="rounded-circle d-flex justify-content-center align-items-center me-3"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            background: "#FFF3E5",
                                        }}
                                    >
                                        <FaRupeeSign
                                            style={{
                                                color: "#F39001",
                                                fontSize: "15px",
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h6 className="fw-bold mb-1">
                                            Monthly Rent
                                        </h6>
                                        <small className="text-secondary">
                                            {hostel.price}
                                        </small>
                                    </div>

                                </div>

                                {/* Mobile */}
                                <div className="d-flex align-items-center mb-3">

                                    <div
                                        className="rounded-circle d-flex justify-content-center align-items-center me-3"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            background: "#EAF6FF",
                                        }}
                                    >
                                        <FaPhoneAlt
                                            style={{
                                                color: "#009FE3",
                                                fontSize: "15px",
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h6 className="fw-bold mb-1">Contact</h6>
                                        <small className="text-secondary">
                                            {hostel.mobile}
                                        </small>
                                    </div>

                                </div>

                                {/* Food Availability */}
                                {/* <div className="d-flex align-items-center mb-4">

                                    <div
                                        className="rounded-circle d-flex justify-content-center align-items-center me-3"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            background: "#FFF3E5",
                                        }}
                                    >
                                        <FaUtensils
                                            style={{
                                                color: "#F39001",
                                                fontSize: "18px",
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h6 className="fw-bold mb-1">Food</h6>

                                        <small
                                            className={`fw-semibold ${hostel.foodAvailable ? "text-success" : "text-danger"
                                                }`}
                                        >
                                            {hostel.foodAvailable ? (
                                                <>
                                                    <FaCheckCircle className="me-1" />
                                                    Available
                                                </>
                                            ) : (
                                                <>
                                                    <FaTimesCircle className="me-1" />
                                                    Not Available
                                                </>
                                            )}
                                        </small>

                                    </div>

                                </div> */}

                                {/* Distance */}
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="rounded-circle d-flex justify-content-center align-items-center me-3"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            background: "#EAF6FF",
                                        }}
                                    >
                                        <FaWalking
                                            style={{
                                                color: "#009FE3",
                                                fontSize: "15px",
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h6 className="fw-bold mb-1">
                                            Distance
                                        </h6>
                                        <small className="text-secondary">
                                            {hostel.distance}
                                        </small>
                                    </div>
                                </div>

                                {/* Google Maps Button */}
                                <a
                                    href={hostel.googleMap}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn w-100"
                                    style={{
                                        background: "#F39001",
                                        color: "#fff",
                                        borderRadius: "12px",
                                        fontWeight: "600",
                                        padding: "12px",
                                    }}
                                >
                                    <FaMapMarkerAlt className="me-2" />
                                    View on Google Maps
                                </a>

                            </div>
                        </div>

                    ))}

                    {filteredHostels.length === 0 && (
                        <div className="col-12 text-center">
                            <h5 className="text-secondary">
                                No hostels available.
                            </h5>
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
};

export default HostelNearMePage;