import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const InternshipCourses = () => {
  return (
    <>
      <Typography variant="h4" fontWeight={700}>
        Internship Courses
      </Typography>

      <Typography
        variant="body1"
        sx={{ mt: 1, mb: 4, color: "text.secondary" }}
      >
        Manage all Internship Courses from here.
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add Internship Course
      </Button>

      {/* Internship Table will come here */}
    </>
  );
};

export default InternshipCourses;