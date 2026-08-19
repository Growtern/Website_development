import React, { useState } from "react";

// Images
import StartupCertificate from "../../assets/Images/Certificate of Recognition.png";
import IncorporationCertificate from "../../assets/Images/MCA Govt.of India.png";

// MUI
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const LegalIdentity = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        {
            title: "Startup India Recognition",
            image: StartupCertificate,
            buttonColor: "#009FE3",
        },
        {
            title: "Certificate of Incorporation",
            image: IncorporationCertificate,
            buttonColor: "#F39001",
        },
    ];

    const handleShow = (certificate) => {
        setSelectedCertificate(certificate);
    };

    const handleClose = () => {
        setSelectedCertificate(null);
    };

    return (
        <>
            <section className=" bg-white">

                <div className="container py-lg-5">

                    {/* Heading */}

                    <div className="text-center mb-5">

                        <span
                            className="badge rounded-pill px-3 py-2 mb-4 d-inline-flex justify-content-center align-items-center gap-2"
                            style={{
                                background: "#EAF6FF",
                                // backdropFilter: "blur(8px)",
                                color: "black"
                            }}
                        >
                            <span
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    backgroundColor: "#ED7225",
                                    borderRadius: "50%",
                                    display: "inline-block",
                                }}
                            ></span>
                            <span>Certifications</span>
                        </span>

                        <h2
                            className="display-5 fw-bold"
                        >
                            Our Legal
                            <span style={{ color: "#F39001" }}>
                                {" "}Identity
                            </span>
                        </h2>

                        <p
                            className="mx-auto mt-3"
                            style={{
                                maxWidth: "650px",
                            }}
                        >
                            Growtern is officially recognized and registered under the
                            Government of India, ensuring authenticity, transparency,
                            and trust for every learner.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="row justify-content-center g-4">

                        {certificates.map((certificate, index) => (

                            <div
                                className="col-lg-5 col-md-6"
                                key={index}
                            >

                                <div
                                    className="bg-white rounded-5 h-100 p-4 shadow-sm border"
                                    style={{
                                        transition: ".3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-8px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 20px 40px rgba(0,0,0,.12)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "";
                                    }}
                                >

                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className="img-fluid rounded-4 border"
                                        style={{
                                            height: "350px",
                                            width: "100%",
                                            objectFit: "contain",
                                        }}
                                    />

                                    <div className="text-center mt-4">

                                        <h5
                                            className="fw-bold mb-3"
                                            style={{
                                                color: "#0B3A63",
                                            }}
                                        >
                                            {certificate.title}
                                        </h5>

                                        <button
                                            className="btn px-4"
                                            style={{
                                                background: certificate.buttonColor,
                                                color: "#fff",
                                                borderRadius: "10px",
                                            }}
                                            onClick={() => handleShow(certificate.image)}
                                        >
                                            View Certificate
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* MUI Dialog */}

            <Dialog
                open={Boolean(selectedCertificate)}
                onClose={handleClose}
                // maxWidth="sm"
                fullWidth
            >
                <div
                    className="position-relative bg-white p-3"
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            bgcolor: "#fff",
                            boxShadow: 2,
                            "&:hover": {
                                bgcolor: "#f5f5f5",
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {selectedCertificate && (
                        <img
                            src={selectedCertificate}
                            alt="Certificate"
                            className="img-fluid rounded-3"
                            style={{
                                width: "100%",
                                maxHeight: "85vh",
                                objectFit: "contain",
                            }}
                        />
                    )}

                </div>
            </Dialog>
        </>
    );
};

export default LegalIdentity;