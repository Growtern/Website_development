import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const Offers = () => {
    const [offer, setOffer] = useState(null);

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/api/offers`
                );

                const data = await response.json();

                if (data.success && data.data) {
                    setOffer(data.data);
                }
            } catch (error) {
                console.error(
                    "Failed to fetch offer:",
                    error
                );
            }
        };

        fetchOffer();
    }, []);

    // Don't show the section if no offer exists
    if (
        !offer ||
        !offer.images ||
        offer.images.length === 0
    ) {
        return null;
    }

    return (
        <section className="bg-primary py-4">
            <div className="container">

                <div
                    id="offerCarousel"
                    className="carousel"
                    data-bs-ride="carousel"
                >

                    {/* Carousel Indicators */}
                    {offer.images.length > 1 && (
                        <div className="carousel-indicators">

                            {offer.images.map(
                                (image, index) => (
                                    <button
                                        key={
                                            image.public_id ||
                                            index
                                        }
                                        type="button"
                                        data-bs-target="#offerCarousel"
                                        data-bs-slide-to={index}
                                        className={
                                            index === 0
                                                ? "active"
                                                : ""
                                        }
                                        aria-current={
                                            index === 0
                                                ? "true"
                                                : undefined
                                        }
                                        aria-label={`Slide ${
                                            index + 1
                                        }`}
                                    />
                                )
                            )}

                        </div>
                    )}

                    {/* Carousel Images */}
                    <div className="carousel-inner">

                        {offer.images.map(
                            (image, index) => (
                                <div
                                    key={
                                        image.public_id ||
                                        index
                                    }
                                    className={`carousel-item ${
                                        index === 0
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={image.url}
                                        className="d-block w-100 rounded-4 img-fluid"
                                        alt={`Offer ${
                                            index + 1
                                        }`}
                                    />
                                </div>
                            )
                        )}

                    </div>

                    {/* Previous Button */}
                    {offer.images.length > 1 && (
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#offerCarousel"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>

                            <span className="visually-hidden">
                                Previous
                            </span>
                        </button>
                    )}

                    {/* Next Button */}
                    {offer.images.length > 1 && (
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#offerCarousel"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>

                            <span className="visually-hidden">
                                Next
                            </span>
                        </button>
                    )}

                </div>

            </div>
        </section>
    );
};

export default Offers;