import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

export default function SummaryCards() {
  const { token } = useSelector(
    (state) => state.auth
  );

  const [summary, setSummary] = useState({
    totalJobGuaranteedCourses: 0,
    totalOffers: 0,
  });

  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchDashboardSummary = async () => {
      if (!token) return;

      try {
        const response = await axios.get(
          `${API_URL}/api/admin/dashboard/summary`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setSummary(response.data.data);
        }
      } catch (error) {
        console.error(
          "Failed to fetch dashboard summary:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardSummary();
  }, [token]);

  const cards = [
    {
      title: "Job Guaranteed Courses",
      value: loading
        ? "..."
        : summary.totalJobGuaranteedCourses,
      icon: <SchoolRoundedIcon fontSize="medium" />,
      color: "#0365B3",
      bg: "rgba(3,101,179,.08)",
    },
    {
      title: "Internship Courses",
      value: 8,
      icon: <WorkRoundedIcon fontSize="medium" />,
      color: "#4DAE2B",
      bg: "rgba(77,174,43,.08)",
    },
    {
      title: "Total Offers",
      value: loading
        ? "..."
        : summary.totalOffers,
      icon: <LocalOfferRoundedIcon fontSize="medium" />,
      color: "#F06409",
      bg: "rgba(240,100,9,.08)",
    },
  ];

  return (
    <div className="row g-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="col-12 col-sm-6 col-lg-4"
        >
          <div
            className="card h-100 border-0"
            style={{
              borderRadius: "16px",
              borderLeft: `6px solid ${card.color}`,
              background: `linear-gradient(135deg, ${card.bg} 0%, #fff 65%)`,
              transition: "all .3s ease",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                `0 15px 35px ${card.bg}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "none";
            }}
          >
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div
                    className="fw-semibold text-secondary"
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    {card.title}
                  </div>

                  <div
                    className="fw-bold mt-3"
                    style={{
                      fontSize: "44px",
                      color: card.color,
                      lineHeight: 1,
                    }}
                  >
                    {card.value}
                  </div>
                </div>

                <div
                  className="d-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    width: 52,
                    height: 52,
                    background: card.bg,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}