import React, { useState } from "react";
import GiftBox from "../assets/gift_box.png";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ReferralModal from "./Modals/ReferralModal";
import CustomModal from "../ui/Modal";

const ReferEarn = () => {
    const [giftOpened, setGiftOpened] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const showModalClose = () => setShowModal(false);
    const showModalOpen = () => setShowModal(true);

    return (
        <section className="py-4">
            <style>
                {`
    @keyframes blink {
      0%,100%{
        opacity:1;
      }
      50%{
        opacity:.4;
      }
    }

    @keyframes floatGift {
      0%,100%{
        transform: translateY(0px);
      }

      50%{
        transform: translateY(-15px);
      }
    }

    @keyframes popReward {
      0% {
        transform: scale(0);
        opacity: 0;
      }

      70% {
        transform: scale(1.15);
        opacity: 1;
      }

      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .blink-badge {
      animation: blink 1.5s infinite;
    }
  `}
            </style>

            <div className="container">
                <div
                    className="rounded-4 shadow-sm p-4 p-lg-5"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(0,157,255,0.06), rgba(8,217,214,0.06))",
                        border: "1px solid rgba(0,157,255,0.1)",
                    }}
                >
                    <div className="row align-items-center">

                        {/* Left */}
                        <div className="col-md-6 col-lg-6">

                            <span
                                className="badge rounded-pill px-3 py-2 mb-3 blink-badge"
                                style={{
                                    background: "rgba(0,157,255,0.12)",
                                    color: "#009dff",
                                    fontSize: "0.9rem",
                                }}
                            >
                                🎁 Refer & Earn Program
                            </span>

                            <h2
                                className="fw-bold mb-3"
                                style={{
                                    color: "#003b73",
                                    // fontSize: "clamp(1.8rem,3vw,2.5rem)",
                                }}
                            >
                                Refer Friends & Earn Rewards
                            </h2>

                            <p
                                className="mb-4 text-secondary"
                                style={{
                                    fontSize: "1rem",
                                    lineHeight: "1.8",
                                }}
                            >
                                Help your friends build successful careers with Growtern
                                Academy and Earn Instant Cash Rewards worth up to{" "}
                                <span
                                    className="fw-bold"
                                    style={{ color: "rgb(237, 114, 37)" }}
                                >
                                    ₹5,000
                                </span>{" "}
                                for every successful admission.
                            </p>

                            <button
                                onClick={showModalOpen}
                                className="btn text-white fw-semibold px-4 py-2 rounded-pill"
                                style={{
                                    background:
                                        "linear-gradient(90deg,#009dff,#08d9d6)",
                                    border: "none",
                                }}
                            >
                                Refer Now
                            </button>

                        </div>

                        {/* Right */}
                        <div className="col-md-6 col-lg-6 mt-4 mt-lg-0">

                            <div className="text-center">

                                {!giftOpened ? (
                                    <>
                                        <div
                                            onClick={() => setGiftOpened(true)}
                                            style={{
                                                cursor: "pointer",
                                                display: "inline-block",
                                            }}
                                        >
                                            <img
                                                src={GiftBox}
                                                alt="Gift Box"
                                                style={{
                                                    width: "220px",
                                                    maxWidth: "100%",
                                                    height: "auto",
                                                    animation:
                                                        "floatGift 2.5s ease-in-out infinite",
                                                }}
                                            />
                                        </div>

                                        <h5
                                            className="fw-bold mt-3"
                                            style={{ color: "#003b73" }}
                                        >
                                            Click The Gift Box
                                        </h5>

                                        <p className="text-secondary mb-0">
                                            Discover Your Referral Reward
                                        </p>
                                    </>
                                ) : (
                                    <div
                                        style={{
                                            animation:
                                                "popReward .6s ease forwards",
                                        }}
                                    >
                                        <CelebrationIcon
                                            sx={{
                                                fontSize: 90,
                                                color: "rgb(237, 114, 37)",
                                            }}
                                        />

                                        <h1
                                            className="fw-bold mb-2"
                                            style={{
                                                color: "rgb(237, 114, 37)",
                                                fontSize: "4rem",
                                            }}
                                        >
                                            ₹5000
                                        </h1>

                                        <h4
                                            className="fw-bold"
                                            style={{
                                                color: "#003b73",
                                            }}
                                        >
                                            Earn Instant Cash Rewards
                                        </h4>

                                        <p className="text-secondary">
                                            Congratulations! 🎉
                                        </p>

                                        {/* <button
                                            onClick={() => setGiftOpened(false)}
                                            className="btn btn-outline-primary mt-2"
                                        >
                                            Open Again
                                        </button> */}
                                    </div>
                                )}

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <CustomModal
                show={showModal}
                handleClose={showModalClose}
            >
                <span
                    className="modal-close"
                    onClick={showModalClose}
                    style={{
                        color: "red",
                        fontSize: "2rem",
                        top: "-8px",
                        right: "4px",
                        cursor: "pointer",
                        position: "absolute",
                        zIndex: 10,
                    }}
                >
                    &times;
                </span>

                <ReferralModal
                    onClose={showModalClose}
                />
            </CustomModal>
        </section>
    );
};

export default ReferEarn;