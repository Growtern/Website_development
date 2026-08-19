import React from "react";
import "../Styles/AdimissionProcess.css";
import Payment from "./Payment";

const steps = [
    {
        title: "Step 1 – Reserve Your Seat",
        price: "₹4,999",
        desc: "Book your seat to enter the Full-Stack program. This confirms your Seat.",
        button: "Reserve Seat"
    },
    {
        title: "Step 2 – Admission Fee",
        price: "₹4,999",
        desc: "Pay the admission fee to unlock mentorship and learning resources.",
    },
    {
        title: "Step 3 – No Cost EMI",
        price: "Rest x 5 Installments",
        desc: "Split your course fee into 5 easy payments. Final installment before interview.",
        badge: "0% Interest EMI"
    },
];

export default function AdmissionProcess() {
    return (
        //added id for scroll to reach this sec
        <section className="admission-section" id="admission-process">
            <h2 className="admission-title">
                Admission <span>Process</span>
            </h2>

            <p className="admission-subtitle">
                Transparent and easy payment structure designed for students
            </p>

            <div className="steps-grid">
                {steps.map((step, index) => (
                    <div className="step-card" key={index}>
                        <div className="step-number">{index + 1}</div>

                        {step.badge && <div className="emi-badge">{step.badge}</div>}

                        <h3>{step.title}</h3>
                        <div className="step-price">{step.price}</div>
                        <p>{step.desc}</p>


                        {step.button && (
                            <button style={{ width: "100%", height: "40px",border:"none" }}>
                                <Payment

                                    amount={4999}              // Price in INR
                                    user={{                   // Logged-in user info
                                        name: "Enter Your Name",
                                        email: "Enter Your Email",
                                        phone: "Enter mobile number to continue",
                                    }}
                                    buttonBg="#22c55e"        // Button and modal theme color
                                    buttonColor="#ffffff"     // Button text color
                                />
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <div className="interview-pill">
                <h3>🎯 Interview Timeline</h3>
                <p className="pill-text">
                    Your job interview process will start after
                    <strong> 6 months </strong> once you complete your course fees.
                </p>
            </div>

        </section>
    );
}
