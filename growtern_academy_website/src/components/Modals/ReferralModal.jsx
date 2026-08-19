import React, { useState } from "react";
import { toast } from "react-toastify";

const ReferralModal = ({ onClose }) => {
    const API_URL =
        "https://script.google.com/macros/s/AKfycbx3JoWhe4DqH-5fXgbVQOXjdKfaRGfSfvH3qvxo_Bt6jvaWekihmJgqHiEiypWma0aH/exec";

    const [formData, setFormData] = useState({
        referrerName: "",
        referrerMobile: "",
        referrerEmail: "",
        whatsappNumber: "",
        friendName: "",
        friendMobile: "",
        friendEmail: "",
        course: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");
        try {
            setLoading(true);

            const form = new FormData();

            Object.keys(formData).forEach((key) => {
                form.append(key, formData[key]);
            });

            await fetch(API_URL, {
                method: "POST",
                body: form,
                mode: "no-cors",
            });

            // alert("Referral submitted successfully!");

            setFormData({
                referrerName: "",
                referrerMobile: "",
                referrerEmail: "",
                whatsappNumber: "",
                friendName: "",
                friendMobile: "",
                friendEmail: "",
                course: "",
            });

            toast.success(
                "Referral submitted successfully! Thank you for referring your friend."
            );

            onClose();
        } catch (error) {
            console.error(error);
            toast.error(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="mb-3">
                <h4
                    className="fw-bold text-center mb-2"
                    style={{ color: "#003b73" }}
                >
                    Refer & Earn
                </h4>

                <p className="text-center text-muted mb-0">
                    Refer your friends and earn up to ₹5,000 on successful admission.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="m-3">

                <div className="row">

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            placeholder="Your Name"
                            name="referrerName"
                            value={formData.referrerName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            placeholder="Your Mobile Number"
                            name="referrerMobile"
                            value={formData.referrerMobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            placeholder="Your Email"
                            name="referrerEmail"
                            value={formData.referrerEmail}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            placeholder="WhatsApp Number"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12">
                        <hr />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            placeholder="Friend Name"
                            name="friendName"
                            value={formData.friendName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            placeholder="Friend Mobile Number"
                            name="friendMobile"
                            value={formData.friendMobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            placeholder="Friend Email"
                            name="friendEmail"
                            value={formData.friendEmail}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <select
                            className="form-select"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Course</option>

                            <option>PGPP in MERN Stack with Gen AI</option>
                            <option>PGPP in Python Full Stack Development with Gen AI</option>
                            <option>PGPP in Java Full Stack Development with Gen AI</option>
                            <option>PGPP in Artificial Intelligence & Machine Learning</option>
                            <option>PGPP in Data Science & Analytics with Gen AI</option>
                        </select>
                    </div>

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="btn text-whitebtn text-white fw-semibold px-4 py-2 rounded-pill " 
                    style={{
                        background:"linear-gradient(90deg,#009dff,#08d9d6)",
                        border: "none",
                    }}
                >
                    {loading ? "Submitting..." : "Submit Referral"}
                </button>

            </form>
            {status && <p style={{ marginTop: "10px" }}>{status}</p>}
        </>
    );
};

export default ReferralModal;