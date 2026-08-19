import Typography from "@mui/material/Typography";
import SummaryCards from "../components/SummaryCards";
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const DashboardHome = () => {
  const auth = useSelector((state) => state.auth);

  console.log("Redux Auth State:", auth);

  return (
    <>
      <Typography variant="h2" fontWeight={700}>
        Dashboard
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Welcome back, Admin! Here's an overview of your platform.
      </Typography>

      <SummaryCards />

      {/* <RecentActivity /> */}

      <QuickActions />

    </>
  );
};

export default DashboardHome;