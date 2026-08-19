import { useParams, useNavigate } from "react-router-dom";
import "../../Styles/Internship_styles/Collabration_DetailsPage.css";
import collaborationsData from "../../data/Colabrations"; // import your real data


const CollaborationDetails = () => {
    const { partnerId } = useParams();
    const navigate = useNavigate();

    // ✅ Find collaboration using slug from URL
    const collaboration = collaborationsData.find(
        (item) => item.slug === partnerId
    );

    // ✅ Handle not found
    if (!collaboration) {
        return (
            <div className="text-center mt-5">
                <h2>Collaboration Not Found</h2>
                <button
                    className="collaboration-details-back-button mt-3"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>
            </div>
        );
    }

    return (
        <div className="collaboration-details-page-wrapper">

            {/* ===============================
          TOP SPLIT SECTION
      ================================ */}
            <section className="collaboration-details-top-section">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="collaboration-details-image-container">
                                <img
                                    src={collaboration.image}
                                    alt={collaboration.company2}
                                    className="collaboration-details-image"
                                />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-7">
                            <div className="collaboration-details-content-container">

                                <h1 className="collaboration-details-title">
                                    {collaboration.company1} ×{" "}
                                    <span className="collaboration-details-highlight">
                                        {collaboration.company2}
                                    </span>
                                </h1>

                                <p className="collaboration-details-description">
                                    {collaboration.description}
                                </p>

                                {/* Meta Info */}
                                <div className="collaboration-details-meta-wrapper">
                                    <div className="collaboration-details-meta-item text-center">
                                        <h2 className="collaboration-details-meta-label">
                                            Partnership Date :
                                        </h2>
                                        <span className="collaboration-details-meta-value">
                                            {collaboration.date}
                                        </span>
                                    </div>

                                    <div className="collaboration-details-meta-item text-center">
                                        <h2 className="collaboration-details-meta-label">
                                            Status :
                                        </h2>
                                        <span className="collaboration-details-meta-value">
                                            🤝 {collaboration.status}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        className="collaboration-details-back-button"
                                        onClick={() => navigate(-1)}
                                    >
                                        ← Back to Collaboration
                                    </button>

                                    <button
                                        className="collaboration-details-visit-button"
                                        onClick={() => window.open(collaboration.website_link, "_blank")}
                                    >
                                        Visit Website →
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===============================
          LOWER CONTENT SECTION
      ================================ */}
            <section className="collaboration-details-lower-section">
                <div className="container">

                    <h2 className="collaboration-details-about-heading">
                        About This <span style={{ color: "#ff8c08" }}>Collaboration</span>
                    </h2>

                    <p className="collaboration-details-full-description">
                        {collaboration.fullDescription}
                    </p>

                    {/* Highlights */}
                    <div className="collaboration-details-highlights-grid">
                        {collaboration.highlights.map((item, index) => (
                            <div
                                key={index}
                                className="collaboration-details-highlight-card"
                            >
                                ✓ {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CollaborationDetails;
