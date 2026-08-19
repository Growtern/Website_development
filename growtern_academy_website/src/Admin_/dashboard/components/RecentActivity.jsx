import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const activities = [
  {
    action: "Job Guaranteed Course added",
    time: "2 minutes ago",
    icon: <CheckCircleRoundedIcon />,
    color: "success.main",
    bg: "rgba(77,174,43,.12)",
  },
  {
    action: "Internship Course updated",
    time: "20 minutes ago",
    icon: <EditRoundedIcon />,
    color: "primary.main",
    bg: "rgba(3,101,179,.10)",
  },
  {
    action: "Offer Banner deleted",
    time: "1 hour ago",
    icon: <DeleteRoundedIcon />,
    color: "error.main",
    bg: "rgba(229,57,53,.10)",
  },
];

const RecentActivity = () => {
  return (
    <Paper
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 3,
        }}
      >
        Recent Activity
      </Typography>

      <List sx={{ p: 0 }}>
        {activities.map((activity, index) => (
          <ListItem
            key={index}
            sx={{
              borderRadius: 3,
              mb: 1.5,
              px: 2,
              py: 1.5,
              transition: ".25s",

              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          >
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                bgcolor: activity.bg,
                color: activity.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
                flexShrink: 0,
              }}
            >
              {activity.icon}
            </Box>

            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  {activity.action}
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    fontSize: 13,
                    color: "text.secondary",
                    mt: 0.5,
                  }}
                >
                  {activity.time}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivity;