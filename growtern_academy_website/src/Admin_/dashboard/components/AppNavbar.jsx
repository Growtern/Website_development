import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SideMenuMobile from "./SideMenu";
import MenuButton from "./MenuButton";
import SiteLogo from "./SiteLogo";

export default function AppNavbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <nav
          className="position-fixed top-0 start-0 end-0 bg-white border-bottom px-3 py-3 shadow-sm"
        style={{
          zIndex: 1030
        }}
      >
        <div className="d-flex align-items-center container">

          <SiteLogo />

          <MenuButton
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuRoundedIcon />
          </MenuButton>

        </div>
      </nav>

      <SideMenuMobile
        open={open}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}