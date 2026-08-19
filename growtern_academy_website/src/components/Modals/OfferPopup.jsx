import React, { useState, useEffect } from "react";
import image from "../../assets/Images/Internship/Offer-Summer-Internship-2026 (1).jpg";

export default function Popup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <>
            {/* INTERNAL CSS */}
            <style>
                {`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.65);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    backdrop-filter: blur(5px);
                    padding: 15px;
                }

                .modal-box {
                    background: #ffffff10;
                    width: 100%;
                    max-width: 550px;
                    border-radius: 18px;
                    overflow: hidden;
                    animation: scaleUp 0.35s ease-out;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.4);
                }

                .modal-img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .modal-content {
                    padding: 25px;
                    text-align: center;
                    color: white;
                }

                .close-icon {
                    position: absolute;
                    top: 12px;
                    right: 18px;
                    font-size: 32px;
                    color: white;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .close-icon:hover {
                    transform: scale(1.2);
                }

                @keyframes scaleUp {
                    from { transform: scale(0.7); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .modal-btn {
                    background: linear-gradient(135deg, #ff6b6b, #f7b733);
                    padding: 14px 45px;
                    border-radius: 50px;
                    border: none;
                    font-size: 18px;
                    font-weight: 700;
                    cursor: pointer;
                    color: #fff;
                    transition: 0.3s;
                    box-shadow: 0 6px 18px rgba(255, 107, 107, 0.4);
                    margin-top: 18px;
                }
                .modal-btn:hover {
                    transform: scale(1.06);
                }

                @media (max-width: 480px) {
                    h2 { font-size: 22px !important; }
                    p  { font-size: 15px !important; }
                    .modal-btn { font-size: 16px; padding: 12px 32px; }
                }
                `}
            </style>

            <div className="modal-overlay">
                <div className="modal-box">
                    <button className="close-icon" onClick={() => setShow(false)}>×</button>

                    <a href="/Certificate-Courses" style={{ textDecoration: "none" }}>
                        <img src={image} alt="Modal Offer" className="modal-img" />
                    </a>

                    <div className="modal-content">
                        <h2 style={{
                            fontSize: "28px",
                            fontWeight: "800",
                            marginBottom: "15px",
                            background: "linear-gradient(90deg, #ffdd00, #ff6b6b)",
                            WebkitBackgroundClip: "text",
                            color: "transparent"
                        }}>
                            Don’t Waste Summer — Invest in Your Career !
                        </h2>
                        <a href="/Certificate-Courses" style={{ textDecoration: "none" }}>
                            <button className="modal-btn">
                                Explore Internships
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
