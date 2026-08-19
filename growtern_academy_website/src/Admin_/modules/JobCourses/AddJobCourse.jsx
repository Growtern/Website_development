import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1 MB
const MAX_PDF_SIZE = 4 * 1024 * 1024;  // 4 MB

import {
  Box,
  Paper,
  Tabs,
  Tab,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  IconButton,
  Chip,
  Stack,
  Alert,
} from "@mui/material";

import {
  ArrowBack,
  Add,
  DeleteOutlineOutlined,
  UploadFile,
  School,
  CreditCard,
  MenuBook,
  Settings,
  Close,
} from "@mui/icons-material";

import { createJobCourse } from "./services/jobCourse.service";

const AddJobCourse = () => {
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const [formData, setFormData] = useState({
    courseTitle: "",
    nextBatchStartFrom: "",
    curriculum: "",
    featured: false,
    status: "Active",
    displayOrder: 0,
  });

  const [syllabusFile, setSyllabusFile] = useState(null);

  // Course image
  const [courseImage, setCourseImage] = useState(null);

  const [plans, setPlans] = useState([
    {
      type: "Standard",
      mode: "Online",
      title: "",
      subtitle: "",
      price: "",
      originalPrice: "",
      duration: "",
      batchSize: "",
      badge: "",
      features: [""],
      buttonText: "",
      popular: false,
    },
  ]);

  const [modules, setModules] = useState([
    {
      title: "",
      category: "",
      points: [""],
    },
  ]);

  const [roles, setRoles] = useState([""]);

  // ==========================================
  // Basic fields
  // ==========================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ==========================================
  // Tabs
  // ==========================================

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // ==========================================
  // Plans
  // ==========================================

  const handlePlanChange = (index, field, value) => {
    setPlans((prev) =>
      prev.map((plan, planIndex) =>
        planIndex === index
          ? {
              ...plan,
              [field]: value,
            }
          : plan
      )
    );
  };

  const addPlan = () => {
    setPlans((prev) => [
      
      {
        type: "Premium",
        mode: "Online",
        title: "",
        subtitle: "",
        price: "",
        originalPrice: "",
        duration: "",
        batchSize: "",
        badge: "",
        features: [""],
        buttonText: "",
        popular: false,
      },
      ...prev
    ]);
  };

  const removePlan = (index) => {
    if (plans.length === 1) {
      toast.warning("At least one plan is required.");
      return;
    }

    setPlans((prev) =>
      prev.filter((_, planIndex) => planIndex !== index)
    );
  };

  // ==========================================
  // Plan Features
  // ==========================================

  const handleFeatureChange = (
    planIndex,
    featureIndex,
    value
  ) => {
    setPlans((prev) =>
      prev.map((plan, index) => {
        if (index !== planIndex) return plan;

        const updatedFeatures = [...plan.features];

        updatedFeatures[featureIndex] = value;

        return {
          ...plan,
          features: updatedFeatures,
        };
      })
    );
  };

  const addFeature = (planIndex) => {
    setPlans((prev) =>
      prev.map((plan, index) =>
        index === planIndex
          ? {
            ...plan,
            features: ["", ...plan.features],
          }
          : plan
      )
    );
  };

  const removeFeature = (planIndex, featureIndex) => {
    setPlans((prev) =>
      prev.map((plan, index) => {
        if (index !== planIndex) return plan;

        const updatedFeatures = plan.features.filter(
          (_, i) => i !== featureIndex
        );

        return {
          ...plan,
          features:
            updatedFeatures.length > 0
              ? updatedFeatures
              : [""],
        };
      })
    );
  };

  // ==========================================
  // Modules
  // ==========================================

  const handleModuleChange = (
    moduleIndex,
    field,
    value
  ) => {
    setModules((prev) =>
      prev.map((module, index) =>
        index === moduleIndex
          ? {
              ...module,
              [field]: value,
            }
          : module
      )
    );
  };

  const addModule = () => {
    setModules((prev) => [
      {
        title: "",
        category: "",
        points: [""],
      },
      ...prev,
    ]);
  };

  const removeModule = (index) => {
    if (modules.length === 1) {
      toast.warning("At least one module is required.");
      return;
    }

    setModules((prev) =>
      prev.filter((_, moduleIndex) => moduleIndex !== index)
    );
  };

  // ==========================================
  // Module Points
  // ==========================================

  const handlePointChange = (
    moduleIndex,
    pointIndex,
    value
  ) => {
    setModules((prev) =>
      prev.map((module, index) => {
        if (index !== moduleIndex) return module;

        const updatedPoints = [...module.points];

        updatedPoints[pointIndex] = value;

        return {
          ...module,
          points: updatedPoints,
        };
      })
    );
  };

  const addPoint = (moduleIndex) => {
    setModules((prev) =>
      prev.map((module, index) =>
        index === moduleIndex
          ? {
            ...module,
            points: ["", ...module.points],
          }
          : module
      )
    );
  };

  const removePoint = (
    moduleIndex,
    pointIndex
  ) => {
    setModules((prev) =>
      prev.map((module, index) => {
        if (index !== moduleIndex) return module;

        const updatedPoints = module.points.filter(
          (_, i) => i !== pointIndex
        );

        return {
          ...module,
          points:
            updatedPoints.length > 0
              ? updatedPoints
              : [""],
        };
      })
    );
  };

  // ==========================================
  // Roles
  // ==========================================

  const handleRoleChange = (index, value) => {
    setRoles((prev) =>
      prev.map((role, roleIndex) =>
        roleIndex === index ? value : role
      )
    );
  };

  const addRole = () => {
    setRoles((prev) => ["", ...prev]);
  };

  const removeRole = (index) => {
    if (roles.length === 1) {
      toast.warning(
        "At least one career role is required."
      );
      return;
    }

    setRoles((prev) =>
      prev.filter((_, roleIndex) => roleIndex !== index)
    );
  };

  // ==========================================
  // Submit
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Authentication token not found.");
      return;
    }

    if (!syllabusFile) {
      toast.error("Please select a syllabus PDF.");
      setActiveTab(0);
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();

      data.append(
        "courseTitle",
        formData.courseTitle
      );

      data.append(
        "nextBatchStartFrom",
        formData.nextBatchStartFrom
      );

      data.append(
        "curriculum",
        formData.curriculum
      );

      data.append(
        "featured",
        String(formData.featured)
      );

      data.append(
        "status",
        formData.status
      );

      data.append(
        "displayOrder",
        String(formData.displayOrder)
      );

      // Syllabus PDF
      data.append(
        "syllabusPdf",
        syllabusFile
      );

      // Course Image
      if (courseImage) {
        data.append(
          "courseImage",
          courseImage
        );
      }

      data.append(
        "plans",
        JSON.stringify(plans)
      );

      data.append(
        "modules",
        JSON.stringify(modules)
      );

      data.append(
        "roles",
        JSON.stringify(roles)
      );

      const response = await createJobCourse(
        data,
        token
      );

      if (response.success) {
        toast.success(
          "Job Guaranteed Course created successfully."
        );

        navigate("/admin/job-courses");
      }
    } catch (error) {
      console.error(
        "Create Job Course Error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to create course."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Reusable Styles
  // ==========================================

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 1,
      backgroundColor: "#fff",
    },
  };

  const cardSx = {
    borderRadius: 1,
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
        p: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        {/* ===================================== */}
        {/* Header */}
        {/* ===================================== */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            gap: 2,
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "#172033",
                fontSize: {
                  xs: "1.6rem",
                  md: "2rem",
                },
              }}
            >
              Add Job Guaranteed Course
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              Create and configure a new job guaranteed
              course.
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit}>
          {/* ===================================== */}
          {/* Tabs */}
          {/* ===================================== */}

          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                px: 2,
                borderBottom: "1px solid #e5e7eb",
                backgroundColor: "#fff",

                "& .MuiTab-root": {
                  minHeight: 70,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  minWidth: 170,
                },

                "& .Mui-selected": {
                  color: "#1976d2",
                },

                "& .MuiTabs-indicator": {
                  height: 3,
                  borderRadius: 3,
                },
              }}
            >
              <Tab
                icon={<School />}
                iconPosition="start"
                label="Course Information"
              />

              <Tab
                icon={<CreditCard />}
                iconPosition="start"
                label="Plans"
              />

              <Tab
                icon={<MenuBook />}
                iconPosition="start"
                label="Modules"
              />

              <Tab
                icon={<Settings />}
                iconPosition="start"
                label="Roles & Settings"
              />
            </Tabs>

            <Box sx={{ p: { xs: 2, md: 4 } }}>
              {/* ===================================== */}
              {/* TAB 1 - COURSE INFORMATION */}
              {/* ===================================== */}

              {activeTab === 0 && (
                <Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      Course Information
                    </Typography>

                  </Box>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                      <TextField
                        fullWidth
                        required
                        label="Course Title"
                        name="courseTitle"
                        placeholder="Enter course title"
                        value={formData.courseTitle}
                        onChange={handleChange}
                        sx={inputSx}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        required
                        type="date"
                        name="nextBatchStartFrom"
                        value={
                          formData.nextBatchStartFrom
                        }
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={inputSx}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={7}
                        label="Curriculum"
                        name="curriculum"
                        placeholder="Enter course curriculum"
                        value={formData.curriculum}
                        onChange={handleChange}
                        sx={inputSx}
                      />
                    </Grid>

                    {/* ================================= */}
                    {/* Syllabus Upload */}
                    {/* ================================= */}

                    <Grid item xs={12}>
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          backgroundColor: "#fafbfc",
                          borderStyle: "dashed",
                        }}
                      >
                        <Stack
                          direction={{
                            xs: "column",
                            sm: "row",
                          }}
                          spacing={2}
                          alignItems={{
                            xs: "flex-start",
                            sm: "center",
                          }}
                        >
                          <Button
                            component="label"
                            variant="outlined"
                            startIcon={<UploadFile />}
                            sx={{
                              borderRadius: 2,
                              textTransform: "none",
                              fontWeight: 600,
                            }}
                          >
                            Select Syllabus PDF

                            <input
                              hidden
                              type="file"
                              accept="application/pdf"
                              onChange={(e) => {
                                const file = e.target.files?.[0];

                                if (!file) return;

                                if (file.size > MAX_PDF_SIZE) {
                                  toast.error("Syllabus PDF must be 4 MB or smaller.");
                                  e.target.value = "";
                                  setSyllabusFile(null);
                                  return;
                                }

                                setSyllabusFile(file);
                              }}
                            />
                          </Button>

                          <Box>
                            {syllabusFile ? (
                              <Typography
                                variant="body2"
                                fontWeight={600}
                              >
                                {syllabusFile.name}
                              </Typography>
                            ) : (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                No file selected
                              </Typography>
                            )}

                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              PDF only • Maximum size:
                              4 MB
                            </Typography>
                          </Box>
                        </Stack>
                      </Paper>
                    </Grid>

                    {/* ================================= */}
                    {/* Course Image Upload */}
                    {/* ================================= */}

                    <Grid item xs={12}>
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          backgroundColor: "#fafbfc",
                          borderStyle: "dashed",
                        }}
                      >
                        <Stack
                          direction={{
                            xs: "column",
                            sm: "row",
                          }}
                          spacing={2}
                          alignItems={{
                            xs: "flex-start",
                            sm: "center",
                          }}
                        >
                          <Button
                            component="label"
                            variant="outlined"
                            startIcon={<UploadFile />}
                            sx={{
                              borderRadius: 2,
                              textTransform: "none",
                              fontWeight: 600,
                            }}
                          >
                            Select Course Image

                            <input
                              hidden
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];

                                if (!file) return;

                                if (file.size > MAX_IMAGE_SIZE) {
                                  toast.error("Course image must be 1 MB or smaller.");
                                  e.target.value = "";
                                  setCourseImage(null);
                                  return;
                                }

                                setCourseImage(file);
                              }}
                            />
                          </Button>

                          <Box>
                            {courseImage ? (
                              <Typography
                                variant="body2"
                                fontWeight={600}
                              >
                                {courseImage.name}
                              </Typography>
                            ) : (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                No image selected
                              </Typography>
                            )}

                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Recommended size: 1200 × 675 px (16:9) •
                              JPG, JPEG, PNG or WEBP • Maximum size: 1 MB
                            </Typography>
                          </Box>
                        </Stack>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => setActiveTab(1)}
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        px: 4,
                        fontWeight: 600,
                      }}
                    >
                      Continue to Plans
                    </Button>
                  </Box>
                </Box>
              )}

              {/* ===================================== */}
              {/* TAB 2 - PLANS */}
              {/* ===================================== */}

              {activeTab === 1 && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                      >
                        Course Plans
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      startIcon={<Add />}
                      onClick={addPlan}
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      Plan
                    </Button>
                  </Box>

                  <Stack spacing={3}>
                    {plans.map(
                      (plan, planIndex) => (
                        <Card
                          key={planIndex}
                          sx={{
                            ...cardSx,
                            overflow: "visible",
                          }}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent:
                                  "space-between",
                                alignItems: "center",
                                mb: 3,
                              }}
                            >
                              <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                              >
                                <Typography
                                  variant="h6"
                                  fontWeight={700}
                                >
                                  Plan {planIndex + 1}
                                </Typography>

                                <Chip
                                  label={plan.type}
                                  size="small"
                                  color={
                                    plan.type ===
                                    "Premium"
                                      ? "secondary"
                                      : "primary"
                                  }
                                />
                              </Stack>

                              {plans.length > 1 && (
                                <IconButton
                                  color="error"
                                  onClick={() =>
                                    removePlan(
                                      planIndex
                                    )
                                  }
                                >
                                  <DeleteOutlineOutlined />
                                </IconButton>
                              )}
                            </Box>

                            <Grid
                              container
                              spacing={2.5}
                            >
                              <Grid item xs={12} md={4}>
                                <FormControl
                                  fullWidth
                                >
                                  <InputLabel>
                                    Type
                                  </InputLabel>

                                  <Select
                                    value={plan.type}
                                    label="Type"
                                    onChange={(e) =>
                                      handlePlanChange(
                                        planIndex,
                                        "type",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <MenuItem value="Standard">
                                      Standard
                                    </MenuItem>

                                    <MenuItem value="Premium">
                                      Premium
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>

                              <Grid item xs={12} md={4}>
                                <FormControl
                                  fullWidth
                                >
                                  <InputLabel>
                                    Mode
                                  </InputLabel>

                                  <Select
                                    value={plan.mode}
                                    label="Mode"
                                    onChange={(e) =>
                                      handlePlanChange(
                                        planIndex,
                                        "mode",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <MenuItem value="Online">
                                      Online
                                    </MenuItem>

                                    <MenuItem value="Offline">
                                      Offline
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>

                              <Grid item xs={12} md={4}>
                                <TextField
                                  fullWidth
                                  label="Plan Title"
                                  value={plan.title}
                                  onChange={(e) =>
                                    handlePlanChange(
                                      planIndex,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12} md={6}>
                                <TextField
                                  fullWidth
                                  label="Subtitle"
                                  value={plan.subtitle}
                                  onChange={(e) =>
                                    handlePlanChange(
                                      planIndex,
                                      "subtitle",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                  fullWidth
                                  type="number"
                                  label="Price"
                                  value={plan.price}
                                  onChange={(e) =>
                                    handlePlanChange(
                                      planIndex,
                                      "price",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                  fullWidth
                                  type="number"
                                  label="Original Price"
                                  value={
                                    plan.originalPrice
                                  }
                                  onChange={(e) =>
                                    handlePlanChange(
                                      planIndex,
                                      "originalPrice",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12} md={4}>
                                <TextField
                                  fullWidth
                                  label="Duration"
                                  placeholder="e.g. 6 Months"
                                  value={plan.duration}
                                  onChange={(e) =>
                                    handlePlanChange(
                                      planIndex,
                                      "duration",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12} md={4}>
                                <TextField
                                  fullWidth
                                  label="Batch Size"
                                  value={plan.batchSize}
                                  onChange={(e) =>
                                    handlePlanChange(
                                      planIndex,
                                      "batchSize",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12} md={4}>
                                <TextField
                                  fullWidth
                                  label="Badge"
                                  placeholder="e.g. Most Popular"
                                  value={plan.badge}
                                  onChange={(e) =>
                                    handlePlanChange(
                                      planIndex,
                                      "badge",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12} md={8}>
                                <TextField
                                  fullWidth
                                  label="Button Text"
                                  value={plan.buttonText}
                                  onChange={(e) =>
                                    handlePlanChange(
                                      planIndex,
                                      "buttonText",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid
                                item
                                xs={12}
                                md={4}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={
                                        plan.popular
                                      }
                                      onChange={(e) =>
                                        handlePlanChange(
                                          planIndex,
                                          "popular",
                                          e.target
                                            .checked
                                        )
                                      }
                                    />
                                  }
                                  label="Mark as Popular"
                                />
                              </Grid>

                              {/* Features */}

                              <Grid item xs={12}>
                                <Divider
                                  sx={{ my: 1 }}
                                />

                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent:
                                      "space-between",
                                    alignItems: "center",
                                    mb: 2,
                                  }}
                                >
                                  <Typography
                                    fontWeight={700}
                                  >
                                    Features
                                  </Typography>

                                  <Button
                                    size="small"
                                    startIcon={<Add />}
                                    onClick={() =>
                                      addFeature(
                                        planIndex
                                      )
                                    }
                                    sx={{
                                      textTransform:
                                        "none",
                                    }}
                                  >
                                    Add Feature
                                  </Button>
                                </Box>

                                <Stack spacing={1.5}>
                                  {plan.features.map(
                                    (
                                      feature,
                                      featureIndex
                                    ) => (
                                      <Box
                                        key={
                                          featureIndex
                                        }
                                        sx={{
                                          display: "flex",
                                          gap: 1,
                                        }}
                                      >
                                        <TextField
                                          fullWidth
                                          size="small"
                                          placeholder={`Feature ${
                                            featureIndex +
                                            1
                                          }`}
                                          value={
                                            feature
                                          }
                                          onChange={(e) =>
                                            handleFeatureChange(
                                              planIndex,
                                              featureIndex,
                                              e.target
                                                .value
                                            )
                                          }
                                          sx={inputSx}
                                        />

                                        <IconButton
                                          color="error"
                                          onClick={() =>
                                            removeFeature(
                                              planIndex,
                                              featureIndex
                                            )
                                          }
                                        >
                                          <Close />
                                        </IconButton>
                                      </Box>
                                    )
                                  )}
                                </Stack>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      )
                    )}
                  </Stack>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      gap: 2,
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => setActiveTab(0)}
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      onClick={() => setActiveTab(2)}
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        px: 4,
                        fontWeight: 600,
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      Continue to Modules
                    </Button>
                  </Box>
                </Box>
              )}

              {/* ===================================== */}
              {/* TAB 3 - MODULES */}
              {/* ===================================== */}

              {activeTab === 2 && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                      >
                        Course Modules
                      </Typography>

                    </Box>

                    <Button
                      variant="contained"
                      startIcon={<Add />}
                      onClick={addModule}
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      Module
                    </Button>
                  </Box>

                  <Stack spacing={3}>
                    {modules.map(
                      (module, moduleIndex) => (
                        <Card
                          key={moduleIndex}
                          sx={cardSx}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent:
                                  "space-between",
                                alignItems: "center",
                                mb: 3,
                              }}
                            >
                              <Typography
                                variant="h6"
                                fontWeight={700}
                              >
                                Module{" "}
                                {moduleIndex + 1}
                              </Typography>

                              {modules.length > 1 && (
                                <IconButton
                                  color="error"
                                  onClick={() =>
                                    removeModule(
                                      moduleIndex
                                    )
                                  }
                                >
                                  <DeleteOutlineOutlined />
                                </IconButton>
                              )}
                            </Box>

                            <Grid
                              container
                              spacing={2.5}
                            >
                              <Grid item xs={12} md={6}>
                                <TextField
                                  fullWidth
                                  required
                                  label="Module Title"
                                  value={module.title}
                                  onChange={(e) =>
                                    handleModuleChange(
                                      moduleIndex,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12} md={6}>
                                <TextField
                                  fullWidth
                                  label="Category"
                                  value={module.category}
                                  onChange={(e) =>
                                    handleModuleChange(
                                      moduleIndex,
                                      "category",
                                      e.target.value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <Divider
                                  sx={{ my: 1 }}
                                />

                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent:
                                      "space-between",
                                    alignItems: "center",
                                    mb: 2,
                                  }}
                                >
                                  <Typography
                                    fontWeight={700}
                                  >
                                    Module Points
                                  </Typography>

                                  <Button
                                    size="small"
                                    startIcon={<Add />}
                                    onClick={() =>
                                      addPoint(
                                        moduleIndex
                                      )
                                    }
                                    sx={{
                                      textTransform:
                                        "none",
                                    }}
                                  >
                                    Add Point
                                  </Button>
                                </Box>

                                <Stack spacing={1.5}>
                                  {module.points.map(
                                    (
                                      point,
                                      pointIndex
                                    ) => (
                                      <Box
                                        key={pointIndex}
                                        sx={{
                                          display: "flex",
                                          gap: 1,
                                        }}
                                      >
                                        <TextField
                                          fullWidth
                                          size="small"
                                          placeholder={`Point ${
                                            pointIndex +
                                            1
                                          }`}
                                          value={point}
                                          onChange={(e) =>
                                            handlePointChange(
                                              moduleIndex,
                                              pointIndex,
                                              e.target
                                                .value
                                            )
                                          }
                                          sx={inputSx}
                                        />

                                        <IconButton
                                          color="error"
                                          onClick={() =>
                                            removePoint(
                                              moduleIndex,
                                              pointIndex
                                            )
                                          }
                                        >
                                          <Close />
                                        </IconButton>
                                      </Box>
                                    )
                                  )}
                                </Stack>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      )
                    )}
                  </Stack>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      gap: 2,
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => setActiveTab(1)}
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      onClick={() => setActiveTab(3)}
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        px: 4,
                        fontWeight: 600,
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      Continue to Settings
                    </Button>
                  </Box>
                </Box>
              )}

              {/* ===================================== */}
              {/* TAB 4 - ROLES & SETTINGS */}
              {/* ===================================== */}

              {activeTab === 3 && (
                <Box>
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      Roles & Course Settings
                    </Typography>
                  </Box>

                  {/* Career Roles */}

                  <Card sx={{ ...cardSx, mb: 3 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          alignItems: "center",
                          mb: 3,
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={700}
                          >
                            Career Roles
                          </Typography>
                        </Box>

                        <Button
                          variant="outlined"
                          startIcon={<Add />}
                          onClick={addRole}
                          sx={{
                            borderRadius: 1,
                            textTransform: "none",
                          }}
                        >
                          Role
                        </Button>
                      </Box>

                      <Stack spacing={1.5}>
                        {roles.map(
                          (role, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                gap: 1,
                              }}
                            >
                              <TextField
                                fullWidth
                                required
                                size="small"
                                label={`Career Role ${
                                  index + 1
                                }`}
                                placeholder="e.g. Full Stack Developer"
                                value={role}
                                onChange={(e) =>
                                  handleRoleChange(
                                    index,
                                    e.target.value
                                  )
                                }
                                sx={inputSx}
                              />

                              <IconButton
                                color="error"
                                onClick={() =>
                                  removeRole(index)
                                }
                              >
                                <Close />
                              </IconButton>
                            </Box>
                          )
                        )}
                      </Stack>
                    </CardContent>
                  </Card>

                  {/* Course Settings */}

                  <Card sx={cardSx}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ mb: 3 }}
                      >
                        Course Settings
                      </Typography>

                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <FormControl fullWidth>
                            <InputLabel>
                              Status
                            </InputLabel>

                            <Select
                              name="status"
                              value={formData.status}
                              label="Status"
                              onChange={handleChange}
                            >
                              <MenuItem value="Active">
                                Active
                              </MenuItem>

                              <MenuItem value="Inactive">
                                Inactive
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} md={4}>
                          <TextField
                            fullWidth
                            type="number"
                            label="Display Order"
                            name="displayOrder"
                            inputProps={{
                              min: 0,
                            }}
                            value={
                              formData.displayOrder
                            }
                            onChange={handleChange}
                            sx={inputSx}
                          />
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          md={4}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Switch
                                name="featured"
                                checked={
                                  formData.featured
                                }
                                onChange={handleChange}
                              />
                            }
                            label={
                              <Box>
                                <Typography fontWeight={600}>
                                  Featured Course
                                </Typography>

                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  Show this course as
                                  featured
                                </Typography>
                              </Box>
                            }
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  <Alert
                    severity="info"
                    sx={{
                      mt: 3,
                      borderRadius: 2,
                    }}
                  >
                    Review all course information,
                    plans, modules and roles before
                    creating the course.
                  </Alert>

                  {/* Final Actions */}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      gap: 2,
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => setActiveTab(2)}
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        px: 4,
                        fontWeight: 600,
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      Create Course
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>
        </form>
      </Box>
    </Box>
  );
};

export default AddJobCourse;