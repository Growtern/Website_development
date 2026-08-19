import Drawer, { drawerClasses } from "@mui/material/Drawer";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MenuContent from "./MenuContent";
import { logout } from "../../redux/slices/authSlice";
import { logoutAdmin } from "../../auth/services/auth.service";

function SideMenu({ open, toggleDrawer }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, admin } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      // Call backend logout API
      if (token) {
        await logoutAdmin(token);
      }
    } catch (error) {
      console.error("Logout API failed:", error);
    } finally {
      // Clear Redux authentication state
      dispatch(logout());

      // Redirect to admin login
      navigate("/admin", { replace: true });
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: "none",
          backgroundColor: "background.paper",
          width: 300,
        },
      }}
    >
      <div className="d-flex flex-column h-100">

        {/* Header */}
        <div className="p-3">

          <div className="d-flex align-items-center">

            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
              style={{
                width: 36,
                height: 36,
              }}
            >
              {admin?.fullName.charAt(0) || "A"}
            </div>

            <div className="ms-3">
              <h6
                className="mb-0 fw-semibold"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                {admin?.fullName || "Admin"}
              </h6>
            </div>

          </div>

        </div>

        <hr className="m-0" />

        {/* Menu */}

        <div className="flex-grow-1 overflow-auto">
          <MenuContent />
        </div>

        <hr className="m-0" />

        {/* Footer */}
        <div className="p-3">
          <button
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={handleLogout}
          >
            <LogoutRoundedIcon fontSize="small" />

            Logout
          </button>
        </div>

      </div>
    </Drawer>
  );
}

export default SideMenu;