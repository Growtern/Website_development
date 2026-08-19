import { useNavigate } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div
      className="card mt-4 border-0"
      style={{
        borderRadius: "16px",
        border: "1px solid rgba(3,101,179,.12)",
      }}
    >
      <div className="card-body p-4">
        <h5
          className="fw-bold mb-4"

        >
          Quick Actions
        </h5>

        <div className="d-flex flex-column flex-md-row gap-3">

          <button
            className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate("/admin/job-courses/add")}
            style={{
              fontWeight: 600,
              borderRadius: 12,
              padding: "10px 22px",
            }}
          >
            <AddRoundedIcon fontSize="small" />
            Add Job Guaranteed Course
          </button>

          <button
            className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate("/admin/internships/add")}
            style={{
              fontWeight: 600,
              borderRadius: 12,
              padding: "10px 22px",
            }}
          >
            <AddRoundedIcon fontSize="small" />
            Add Internship Course
          </button>

          <button
            className="btn d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate("/admin/offers/add")}
            style={{
              border: "2px solid #F06409",
              color: "#F06409",
              fontWeight: 600,
              borderRadius: 12,
              padding: "10px 22px",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(240,100,9,.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <AddRoundedIcon fontSize="small" />
            Add Offer Banner
          </button>

        </div>
      </div>
    </div>
  );
};

export default QuickActions;