import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";

export default function MenuContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [courseOpen, setCourseOpen] = useState(true);

  const menuStyle = {
    padding: "12px 16px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: ".25s",
    fontWeight: 500,
    marginBottom: "6px",
  };

  const activeStyle = {
    background: "rgba(3,101,179,.12)",
    color: "#0365B3",
  };

  const hoverIn = (e, active) => {
    if (!active) {
      e.currentTarget.style.background = "#eef6fd";
    }
  };

  const hoverOut = (e, active) => {
    if (!active) {
      e.currentTarget.style.background = "transparent";
    }
  };

  return (
    <div className="px-2 py-2">

      {/* Dashboard */}
      <div
        className="d-flex align-items-center"
        style={{
          ...menuStyle,
          ...(location.pathname === "/admin/dashboard" ? activeStyle : {}),
        }}
        onClick={() => navigate("/admin/dashboard")}
        onMouseEnter={(e) =>
          hoverIn(e, location.pathname === "/admin/dashboard")
        }
        onMouseLeave={(e) =>
          hoverOut(e, location.pathname === "/admin/dashboard")
        }
      >
        <DashboardRoundedIcon fontSize="small" />

        <span className="ms-3">Dashboard</span>
      </div>

      {/* Course */}
      <div
        className="d-flex align-items-center justify-content-between"
        style={menuStyle}
        onClick={() => setCourseOpen(!courseOpen)}
        onMouseEnter={(e) => hoverIn(e, false)}
        onMouseLeave={(e) => hoverOut(e, false)}
      >
        <div className="d-flex align-items-center">
          <SchoolRoundedIcon fontSize="small" />
          <span className="ms-3">Course Management</span>
        </div>

        {courseOpen ? <ExpandLess /> : <ExpandMore />}
      </div>

      {courseOpen && (
        <div
          className="ms-4 ps-3"
          style={{
            borderLeft: "2px solid rgba(3,101,179,.15)",
          }}
        >

          {/* Job Course */}

          <div
            className="d-flex align-items-center"
            style={{
              ...menuStyle,
              ...(location.pathname === "/admin/job-courses"
                ? activeStyle
                : {}),
            }}
            onClick={() => navigate("/admin/job-courses")}
            onMouseEnter={(e) =>
              hoverIn(e, location.pathname === "/admin/job-courses")
            }
            onMouseLeave={(e) =>
              hoverOut(e, location.pathname === "/admin/job-courses")
            }
          >
            <WorkRoundedIcon fontSize="small" />

            <span className="ms-3">Job Guaranteed Courses</span>
          </div>

          {/* Internship */}

          <div
            className="d-flex align-items-center"
            style={{
              ...menuStyle,
              ...(location.pathname === "/admin/internships"
                ? activeStyle
                : {}),
            }}
            onClick={() => navigate("/admin/internships")}
            onMouseEnter={(e) =>
              hoverIn(e, location.pathname === "/admin/internships")
            }
            onMouseLeave={(e) =>
              hoverOut(e, location.pathname === "/admin/internships")
            }
          >
            <WorkRoundedIcon fontSize="small" />

            <span className="ms-3">Internship Courses</span>
          </div>

        </div>
      )}

      {/* Offer */}

      <div
        className="d-flex align-items-center"
        style={{
          ...menuStyle,
          ...(location.pathname === "/admin/offers"
            ? activeStyle
            : {}),
        }}
        onClick={() => navigate("/admin/offers")}
        onMouseEnter={(e) =>
          hoverIn(e, location.pathname === "/admin/offers")
        }
        onMouseLeave={(e) =>
          hoverOut(e, location.pathname === "/admin/offers")
        }
      >
        <LocalOfferRoundedIcon fontSize="small" />

        <span className="ms-3">Offer Banner Management</span>
      </div>

      {/* Add Admin */}

      <div
        className="d-flex align-items-center"
        style={{
          ...menuStyle,
          ...(location.pathname === "/admin/add-admin"
            ? activeStyle
            : {}),
        }}
        onClick={() => navigate("/admin/add-admin")}
        onMouseEnter={(e) =>
          hoverIn(
            e,
            location.pathname === "/admin/add-admin"
          )
        }
        onMouseLeave={(e) =>
          hoverOut(
            e,
            location.pathname === "/admin/add-admin"
          )
        }
      >
        <PersonAddRoundedIcon fontSize="small" />

        <span className="ms-3">Add Admin</span>
      </div>

    </div>
  );
}