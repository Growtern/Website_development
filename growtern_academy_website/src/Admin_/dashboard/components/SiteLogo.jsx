import logo from "../../../assets/Logos/LOGO.png";
import { useNavigate } from "react-router-dom";

export default function SiteLogo() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center flex-grow-1"
      onClick={() => navigate("/admin/dashboard")}
      style={{ cursor: "pointer" }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: "auto",
          height: "2rem",
        }}
      />
    </div>
  );
}