import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  CircularProgress,
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
  PictureAsPdf,
} from "@mui/icons-material";

import {
  getJobCourseById,
  updateJobCourse,
} from "../JobCourses/services/jobCourse.service";

const EditJobCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const { token } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    courseTitle: "",
    nextBatchStartFrom: "",
    curriculum: "",
    featured: false,
    status: "Active",
    displayOrder: 0,
  });

  const [syllabusFile, setSyllabusFile] = useState(null);

  const [courseImage, setCourseImage] = useState(null);

  const [existingSyllabus, setExistingSyllabus] = useState({
    public_id: "",
    url: "",
  });

  const [existingCourseImage, setExistingCourseImage] = useState({
    public_id: "",
    url: "",
  });

  const [plans, setPlans] = useState([]);

  const [modules, setModules] = useState([]);

  const [roles, setRoles] = useState([]);

  // ==========================================
  // Format date for input[type="date"]
  // ==========================================

  const formatDateForInput = (date) => {
    if (!date) return "";

    return new Date(date)
      .toISOString()
      .split("T")[0];
  };

  // ==========================================
  // Fetch Course
  // ==========================================

  useEffect(() => {
    const fetchCourse = async () => {
      if (!token || !id) return;

      try {
        setLoading(true);

        const response = await getJobCourseById(
          id,
          token
        );

        if (!response.success) {
          toast.error(
            response.message ||
            "Failed to load course."
          );

          navigate("/admin/job-courses");
          return;
        }

        const course = response.data;

        setFormData({
          courseTitle: course.courseTitle || "",
          nextBatchStartFrom:
            formatDateForInput(
              course.nextBatchStartFrom
            ),
          curriculum: course.curriculum || "",
          featured: Boolean(course.featured),
          status: course.status || "Active",
          displayOrder:
            course.displayOrder ?? 0,
        });

        setExistingSyllabus({
          public_id:
            course.syllabusPdf?.public_id || "",
          url: course.syllabusPdf?.url || "",
        });

        setExistingCourseImage({
          public_id:
            course.courseImage?.public_id ||
            course.image?.public_id ||
            "",
          url:
            course.courseImage?.url ||
            course.image?.url ||
            "",
        });

        setPlans(
          course.plans?.length
            ? course.plans
            : [
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
            ]
        );

        setModules(
          course.modules?.length
            ? course.modules
            : [
              {
                title: "",
                category: "",
                points: [""],
              },
            ]
        );

        setRoles(
          course.roles?.length
            ? course.roles
            : [""]
        );
      } catch (error) {
        console.error(
          "Get Job Course Error:",
          error
        );

        toast.error(
          error.response?.data?.message ||
          "Failed to load course."
        );

        navigate("/admin/job-courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, token, navigate]);

  // ==========================================
  // Basic Fields
  // ==========================================

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // ==========================================
  // Plans
  // ==========================================

  const handlePlanChange = (
    index,
    field,
    value
  ) => {
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
      toast.warning(
        "At least one plan is required."
      );
      return;
    }

    setPlans((prev) =>
      prev.filter(
        (_, planIndex) =>
          planIndex !== index
      )
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
        if (index !== planIndex) {
          return plan;
        }

        const updatedFeatures = [
          ...(plan.features || []),
        ];

        updatedFeatures[featureIndex] =
          value;

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
            features: [
              "",
              ...(plan.features || []),
            ],
          }
          : plan
      )
    );
  };

  const removeFeature = (
    planIndex,
    featureIndex
  ) => {
    setPlans((prev) =>
      prev.map((plan, index) => {
        if (index !== planIndex) {
          return plan;
        }

        const updatedFeatures = (
          plan.features || []
        ).filter(
          (_, i) =>
            i !== featureIndex
        );

        return {
          ...plan,
          features:
            updatedFeatures.length
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
      toast.warning(
        "At least one module is required."
      );
      return;
    }

    setModules((prev) =>
      prev.filter(
        (_, moduleIndex) =>
          moduleIndex !== index
      )
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
        if (index !== moduleIndex) {
          return module;
        }

        const updatedPoints = [
          ...(module.points || []),
        ];

        updatedPoints[pointIndex] =
          value;

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
            points: [
              "",
              ...(module.points || []),
            ],
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
        if (index !== moduleIndex) {
          return module;
        }

        const updatedPoints = (
          module.points || []
        ).filter(
          (_, i) =>
            i !== pointIndex
        );

        return {
          ...module,
          points:
            updatedPoints.length
              ? updatedPoints
              : [""],
        };
      })
    );
  };

  // ==========================================
  // Roles
  // ==========================================

  const handleRoleChange = (
    index,
    value
  ) => {
    setRoles((prev) =>
      prev.map((role, roleIndex) =>
        roleIndex === index
          ? value
          : role
      )
    );
  };

  const addRole = () => {
    setRoles((prev) => [
      "",
      ...prev,
    ]);
  };

  const removeRole = (index) => {
    if (roles.length === 1) {
      toast.warning(
        "At least one career role is required."
      );
      return;
    }

    setRoles((prev) =>
      prev.filter(
        (_, roleIndex) =>
          roleIndex !== index
      )
    );
  };

  // ==========================================
  // Submit
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error(
        "Authentication token not found."
      );
      return;
    }

    setSaving(true);

    try {
      const data = new FormData();

      // Basic fields

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

      // New PDF only if selected

      if (syllabusFile) {
        data.append(
          "syllabusPdf",
          syllabusFile
        );
      }

      // New Course Image only if selected
      if (courseImage) {
        data.append(
          "courseImage",
          courseImage
        );
      }

      // Nested fields

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

      const response =
        await updateJobCourse(
          id,
          data,
          token
        );

      if (response.success) {
        toast.success(
          "Job Guaranteed Course updated successfully."
        );

        navigate("/admin/job-courses");
      }
    } catch (error) {
      console.error(
        "Update Job Course Error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to update course."
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // Loading
  // ==========================================

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress />

        <Typography color="text.secondary">
          Loading course...
        </Typography>
      </Box>
    );
  }

  // ==========================================
  // Styles
  // ==========================================

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      backgroundColor: "#fff",
    },
  };

  const cardSx = {
    borderRadius: 3,
    border: "1px solid #e5e7eb",
    boxShadow:
      "0 2px 10px rgba(0,0,0,0.04)",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
        p: {
          xs: 2,
          md: 4,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        {/* ===================================== */}
        {/* HEADER */}
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
              variant="h1"
              fontWeight={700}
              sx={{
                color: "#172033",
                fontSize: {
                  xs: "1.6rem",
                  sm: "2rem",
                },
              }}
            >
              Edit Job Guaranteed Course
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              Update course information, plans,
              modules and career roles.
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}
          >
            {/* ===================================== */}
            {/* TABS */}
            {/* ===================================== */}

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                px: 2,
                borderBottom:
                  "1px solid #e5e7eb",
                backgroundColor: "#fff",

                "& .MuiTab-root": {
                  minHeight: 70,
                  minWidth: 170,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
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

            <Box
              sx={{
                p: {
                  xs: 2,
                  md: 4,
                },
              }}
            >
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

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Update the basic information
                      and syllabus for this course.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        md: "2fr 1fr",
                      },
                      gap: 3,
                    }}
                  >
                    {/* Course Title */}

                    <TextField
                      fullWidth
                      required
                      label="Course Title"
                      name="courseTitle"
                      value={
                        formData.courseTitle
                      }
                      onChange={handleChange}
                      sx={inputSx}
                    />

                    {/* Date */}

                    <TextField
                      fullWidth
                      required
                      type="date"
                      label="Next Batch Start From"
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

                    {/* Curriculum */}

                    <Box
                      sx={{
                        gridColumn: {
                          xs: "auto",
                          md: "1 / -1",
                        },
                      }}
                    >
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={7}
                        label="Curriculum"
                        name="curriculum"
                        value={
                          formData.curriculum
                        }
                        onChange={handleChange}
                        sx={inputSx}
                      />
                    </Box>

                    {/* Existing PDF */}

                    <Box
                      sx={{
                        gridColumn: {
                          xs: "auto",
                          md: "1 / -1",
                        },
                      }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          backgroundColor:
                            "#fafbfc",
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
                          justifyContent="space-between"
                        >
                          <Box>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                              mb={0.5}
                            >
                              <PictureAsPdf color="error" />

                              <Typography
                                fontWeight={700}
                              >
                                Current Syllabus
                              </Typography>
                            </Stack>

                            {existingSyllabus.url ? (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                A syllabus PDF is
                                currently uploaded.
                              </Typography>
                            ) : (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                No syllabus PDF
                                uploaded.
                              </Typography>
                            )}
                          </Box>

                          {existingSyllabus.url && (
                            <Button
                              variant="outlined"
                              component="a"
                              href={
                                existingSyllabus.url
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              startIcon={
                                <PictureAsPdf />
                              }
                              sx={{
                                borderRadius: 1,
                                textTransform:
                                  "none",
                                fontWeight: 600,
                              }}
                            >
                              View Current PDF
                            </Button>
                          )}
                        </Stack>
                      </Paper>
                    </Box>

                    {/* Current Course Image */}

                    <Box
                      sx={{
                        gridColumn: {
                          xs: "auto",
                          md: "1 / -1",
                        },
                      }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          backgroundColor: "#fafbfc",
                        }}
                      >
                        <Stack
                          direction={{
                            xs: "column",
                            sm: "row",
                          }}
                          spacing={3}
                          alignItems={{
                            xs: "flex-start",
                            sm: "center",
                          }}
                        >
                          <Box>
                            <Typography
                              fontWeight={700}
                              mb={1}
                            >
                              Current Course Image
                            </Typography>

                            {existingCourseImage.url ? (
                              <Box
                                component="img"
                                src={existingCourseImage.url}
                                alt="Current course"
                                sx={{
                                  width: 220,
                                  height: 130,
                                  objectFit: "cover",
                                  borderRadius: 2,
                                  border:
                                    "1px solid #e5e7eb",
                                  display: "block",
                                }}
                              />
                            ) : (
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                No course image uploaded.
                              </Typography>
                            )}
                          </Box>
                        </Stack>
                      </Paper>
                    </Box>

                    {/* Replace Course Image */}

                    <Box
                      sx={{
                        gridColumn: {
                          xs: "auto",
                          md: "1 / -1",
                        },
                      }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 3,
                          borderRadius: 2,
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
                              borderRadius: 1,
                              textTransform: "none",
                              fontWeight: 600,
                            }}
                          >
                            Replace Course Image

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
                                Leave empty to keep the current image.
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
                    </Box>

                    {/* Replace PDF */}

                    <Box
                      sx={{
                        gridColumn: {
                          xs: "auto",
                          md: "1 / -1",
                        },
                      }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 3,
                          borderRadius: 2,
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
                              borderRadius: 1,
                              textTransform:
                                "none",
                              fontWeight: 600,
                            }}
                          >
                            Replace Syllabus PDF

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
                                Leave empty to keep
                                the current PDF.
                              </Typography>
                            )}

                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              PDF only • Maximum
                              size: 4 MB
                            </Typography>
                          </Box>
                        </Stack>
                      </Paper>
                    </Box>
                  </Box>

                  {/* Navigation */}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      justifyContent:
                        "flex-end",
                      gap: 2,
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() =>
                        setActiveTab(1)
                      }
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        px: 4,
                        fontWeight: 600,
                        width: {
                          xs: "100%",
                          sm: "auto",
                        },
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
                      justifyContent:
                        "space-between",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
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
                      (
                        plan,
                        planIndex
                      ) => (
                        <Card
                          key={planIndex}
                          sx={cardSx}
                        >
                          <CardContent
                            sx={{ p: 3 }}
                          >
                            {/* Plan Header */}

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent:
                                  "space-between",
                                alignItems:
                                  "center",
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
                                  fontWeight={
                                    700
                                  }
                                >
                                  Plan{" "}
                                  {planIndex +
                                    1}
                                </Typography>

                                <Chip
                                  label={
                                    plan.type ||
                                    "Standard"
                                  }
                                  size="small"
                                  color={
                                    plan.type ===
                                      "Premium"
                                      ? "secondary"
                                      : "primary"
                                  }
                                />

                                {plan.popular && (
                                  <Chip
                                    label="Popular"
                                    size="small"
                                    color="success"
                                    variant="outlined"
                                  />
                                )}
                              </Stack>

                              {plans.length >
                                1 && (
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

                            <Box
                              sx={{
                                display: "grid",
                                gridTemplateColumns:
                                {
                                  xs: "1fr",
                                  md: "repeat(12, 1fr)",
                                },
                                gap: 2.5,
                              }}
                            >
                              {/* Type */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 4",
                                  },
                                }}
                              >
                                <FormControl
                                  fullWidth
                                >
                                  <InputLabel>
                                    Type
                                  </InputLabel>

                                  <Select
                                    value={
                                      plan.type ||
                                      "Standard"
                                    }
                                    label="Type"
                                    onChange={(
                                      e
                                    ) =>
                                      handlePlanChange(
                                        planIndex,
                                        "type",
                                        e
                                          .target
                                          .value
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
                              </Box>

                              {/* Mode */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 4",
                                  },
                                }}
                              >
                                <FormControl
                                  fullWidth
                                >
                                  <InputLabel>
                                    Mode
                                  </InputLabel>

                                  <Select
                                    value={
                                      plan.mode ||
                                      "Online"
                                    }
                                    label="Mode"
                                    onChange={(
                                      e
                                    ) =>
                                      handlePlanChange(
                                        planIndex,
                                        "mode",
                                        e
                                          .target
                                          .value
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
                              </Box>

                              {/* Title */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 4",
                                  },
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Plan Title"
                                  value={
                                    plan.title ||
                                    ""
                                  }
                                  onChange={(
                                    e
                                  ) =>
                                    handlePlanChange(
                                      planIndex,
                                      "title",
                                      e
                                        .target
                                        .value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Box>

                              {/* Subtitle */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 6",
                                  },
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Subtitle"
                                  value={
                                    plan.subtitle ||
                                    ""
                                  }
                                  onChange={(
                                    e
                                  ) =>
                                    handlePlanChange(
                                      planIndex,
                                      "subtitle",
                                      e
                                        .target
                                        .value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Box>

                              {/* Price */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 3",
                                  },
                                }}
                              >
                                <TextField
                                  fullWidth
                                  type="number"
                                  label="Price"
                                  value={
                                    plan.price ??
                                    ""
                                  }
                                  onChange={(
                                    e
                                  ) =>
                                    handlePlanChange(
                                      planIndex,
                                      "price",
                                      e
                                        .target
                                        .value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Box>

                              {/* Original Price */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 3",
                                  },
                                }}
                              >
                                <TextField
                                  fullWidth
                                  type="number"
                                  label="Original Price"
                                  value={
                                    plan.originalPrice ??
                                    ""
                                  }
                                  onChange={(
                                    e
                                  ) =>
                                    handlePlanChange(
                                      planIndex,
                                      "originalPrice",
                                      e
                                        .target
                                        .value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Box>

                              {/* Duration */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 4",
                                  },
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Duration"
                                  value={
                                    plan.duration ||
                                    ""
                                  }
                                  onChange={(
                                    e
                                  ) =>
                                    handlePlanChange(
                                      planIndex,
                                      "duration",
                                      e
                                        .target
                                        .value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Box>

                              {/* Batch Size */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 4",
                                  },
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Batch Size"
                                  value={
                                    plan.batchSize ||
                                    ""
                                  }
                                  onChange={(
                                    e
                                  ) =>
                                    handlePlanChange(
                                      planIndex,
                                      "batchSize",
                                      e
                                        .target
                                        .value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Box>

                              {/* Badge */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 4",
                                  },
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Badge"
                                  value={
                                    plan.badge ||
                                    ""
                                  }
                                  onChange={(
                                    e
                                  ) =>
                                    handlePlanChange(
                                      planIndex,
                                      "badge",
                                      e
                                        .target
                                        .value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Box>

                              {/* Button */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 8",
                                  },
                                }}
                              >
                                <TextField
                                  fullWidth
                                  label="Button Text"
                                  value={
                                    plan.buttonText ||
                                    ""
                                  }
                                  onChange={(
                                    e
                                  ) =>
                                    handlePlanChange(
                                      planIndex,
                                      "buttonText",
                                      e
                                        .target
                                        .value
                                    )
                                  }
                                  sx={inputSx}
                                />
                              </Box>

                              {/* Popular */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "span 4",
                                  },
                                  display:
                                    "flex",
                                  alignItems:
                                    "center",
                                }}
                              >
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={Boolean(
                                        plan.popular
                                      )}
                                      onChange={(
                                        e
                                      ) =>
                                        handlePlanChange(
                                          planIndex,
                                          "popular",
                                          e
                                            .target
                                            .checked
                                        )
                                      }
                                    />
                                  }
                                  label="Popular Plan"
                                />
                              </Box>

                              {/* Features */}

                              <Box
                                sx={{
                                  gridColumn:
                                  {
                                    xs: "auto",
                                    md: "1 / -1",
                                  },
                                }}
                              >
                                <Divider
                                  sx={{
                                    my: 1,
                                  }}
                                />

                                <Box
                                  sx={{
                                    display:
                                      "flex",
                                    justifyContent:
                                      "space-between",
                                    alignItems:
                                      "center",
                                    mb: 2,
                                  }}
                                >
                                  <Typography fontWeight={700}>
                                    Features
                                  </Typography>

                                  <Button
                                    size="small"
                                    startIcon={
                                      <Add />
                                    }
                                    onClick={() =>
                                      addFeature(
                                        planIndex
                                      )
                                    }
                                    sx={{
                                      borderRadius:
                                        1,
                                      textTransform:
                                        "none",
                                    }}
                                  >
                                    Add Feature
                                  </Button>
                                </Box>

                                <Stack
                                  spacing={1.5}
                                >
                                  {(
                                    plan.features || [
                                      "",
                                    ]
                                  ).map(
                                    (
                                      feature,
                                      featureIndex
                                    ) => (
                                      <Box
                                        key={
                                          featureIndex
                                        }
                                        sx={{
                                          display:
                                            "flex",
                                          gap: 1,
                                        }}
                                      >
                                        <TextField
                                          fullWidth
                                          size="small"
                                          placeholder={`Feature ${featureIndex +
                                            1
                                            }`}
                                          value={
                                            feature
                                          }
                                          onChange={(
                                            e
                                          ) =>
                                            handleFeatureChange(
                                              planIndex,
                                              featureIndex,
                                              e
                                                .target
                                                .value
                                            )
                                          }
                                          sx={
                                            inputSx
                                          }
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
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      )
                    )}
                  </Stack>

                  {/* Navigation */}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      justifyContent:
                        "space-between",
                      gap: 2,
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() =>
                        setActiveTab(0)
                      }
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        width: {
                          xs: "100%",
                          sm: "auto",
                        },
                      }}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      onClick={() =>
                        setActiveTab(2)
                      }
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        px: 4,
                        fontWeight: 600,
                        width: {
                          xs: "100%",
                          sm: "auto",
                        },
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
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      justifyContent:
                        "space-between",
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
                        fontWeight: 600,
                        width: {
                          xs: "100%",
                          sm: "auto",
                        },
                      }}
                    >
                      Module
                    </Button>
                  </Box>

                  <Stack spacing={3}>
                    {modules.map(
                      (
                        module,
                        moduleIndex
                      ) => (
                        <Card
                          key={moduleIndex}
                          sx={cardSx}
                        >
                          <CardContent
                            sx={{ p: 3 }}
                          >
                            <Box
                              sx={{
                                display:
                                  "flex",
                                justifyContent:
                                  "space-between",
                                alignItems:
                                  "center",
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
                                  Module{" "}
                                  {moduleIndex +
                                    1}
                                </Typography>

                                {module.category && (
                                  <Chip
                                    label={
                                      module.category
                                    }
                                    size="small"
                                    variant="outlined"
                                  />
                                )}
                              </Stack>

                              {modules.length >
                                1 && (
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

                            <Box
                              sx={{
                                display:
                                  "grid",
                                gridTemplateColumns:
                                {
                                  xs: "1fr",
                                  md: "1fr 1fr",
                                },
                                gap: 2.5,
                              }}
                            >
                              <TextField
                                fullWidth
                                required
                                label="Module Title"
                                value={
                                  module.title ||
                                  ""
                                }
                                onChange={(e) =>
                                  handleModuleChange(
                                    moduleIndex,
                                    "title",
                                    e.target.value
                                  )
                                }
                                sx={inputSx}
                              />

                              <TextField
                                fullWidth
                                label="Category"
                                value={
                                  module.category ||
                                  ""
                                }
                                onChange={(e) =>
                                  handleModuleChange(
                                    moduleIndex,
                                    "category",
                                    e.target.value
                                  )
                                }
                                sx={inputSx}
                              />
                            </Box>

                            <Divider
                              sx={{ my: 3 }}
                            />

                            <Box
                              sx={{
                                display:
                                  "flex",
                                flexDirection: {
                                  xs: "column",
                                  sm: "row",
                                },
                                justifyContent:
                                  "space-between",
                                alignItems: {
                                  xs: "flex-start",
                                  sm: "center",
                                },
                                gap: 2,
                                mb: 2,
                              }}
                            >
                              <Box>
                                <Typography
                                  fontWeight={700}
                                >
                                  Module Points
                                </Typography>

                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  Add the topics
                                  covered in this
                                  module.
                                </Typography>
                              </Box>

                              <Button
                                size="small"
                                startIcon={
                                  <Add />
                                }
                                onClick={() =>
                                  addPoint(
                                    moduleIndex
                                  )
                                }
                                sx={{
                                  borderRadius: 1,
                                  textTransform:
                                    "none",
                                }}
                              >
                                Add Point
                              </Button>
                            </Box>

                            <Stack
                              spacing={1.5}
                            >
                              {(
                                module.points || [
                                  "",
                                ]
                              ).map(
                                (
                                  point,
                                  pointIndex
                                ) => (
                                  <Box
                                    key={
                                      pointIndex
                                    }
                                    sx={{
                                      display:
                                        "flex",
                                      gap: 1,
                                    }}
                                  >
                                    <TextField
                                      fullWidth
                                      size="small"
                                      placeholder={`Point ${pointIndex +
                                        1
                                        }`}
                                      value={
                                        point
                                      }
                                      onChange={(
                                        e
                                      ) =>
                                        handlePointChange(
                                          moduleIndex,
                                          pointIndex,
                                          e.target
                                            .value
                                        )
                                      }
                                      sx={
                                        inputSx
                                      }
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
                          </CardContent>
                        </Card>
                      )
                    )}
                  </Stack>

                  {/* Navigation */}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      justifyContent:
                        "space-between",
                      gap: 2,
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() =>
                        setActiveTab(1)
                      }
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        width: {
                          xs: "100%",
                          sm: "auto",
                        },
                      }}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      onClick={() =>
                        setActiveTab(3)
                      }
                      sx={{
                        borderRadius: 1,
                        textTransform: "none",
                        px: 4,
                        fontWeight: 600,
                        width: {
                          xs: "100%",
                          sm: "auto",
                        },
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

                  <Card
                    sx={{
                      ...cardSx,
                      mb: 3,
                    }}
                  >
                    <CardContent
                      sx={{ p: 3 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: {
                            xs: "column",
                            sm: "row",
                          },
                          justifyContent:
                            "space-between",
                          alignItems: {
                            xs: "flex-start",
                            sm: "center",
                          },
                          mb: 3,
                          gap: 2,
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={700}
                          >
                            Career Roles
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            Job roles associated
                            with this course.
                          </Typography>
                        </Box>

                        <Button
                          variant="outlined"
                          startIcon={<Add />}
                          onClick={addRole}
                          sx={{
                            borderRadius: 1,
                            textTransform:
                              "none",
                            width: {
                              xs: "100%",
                              sm: "auto",
                            },
                          }}
                        >
                          Add Role
                        </Button>
                      </Box>

                      <Stack spacing={1.5}>
                        {roles.map(
                          (role, index) => (
                            <Box
                              key={index}
                              sx={{
                                display:
                                  "flex",
                                gap: 1,
                              }}
                            >
                              <TextField
                                fullWidth
                                required
                                size="small"
                                label={`Career Role ${index + 1
                                  }`}
                                placeholder="e.g. MERN Stack Developer"
                                value={role}
                                onChange={(e) =>
                                  handleRoleChange(
                                    index,
                                    e.target
                                      .value
                                  )
                                }
                                sx={inputSx}
                              />

                              <IconButton
                                color="error"
                                onClick={() =>
                                  removeRole(
                                    index
                                  )
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
                    <CardContent
                      sx={{ p: 3 }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ mb: 3 }}
                      >
                        Course Settings
                      </Typography>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns:
                          {
                            xs: "1fr",
                            md: "1fr 1fr 1fr",
                          },
                          gap: 3,
                        }}
                      >
                        {/* Status */}

                        <FormControl fullWidth>
                          <InputLabel>
                            Status
                          </InputLabel>

                          <Select
                            name="status"
                            value={
                              formData.status
                            }
                            label="Status"
                            onChange={
                              handleChange
                            }
                          >
                            <MenuItem value="Active">
                              Active
                            </MenuItem>

                            <MenuItem value="Inactive">
                              Inactive
                            </MenuItem>
                          </Select>
                        </FormControl>

                        {/* Display Order */}

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
                          onChange={
                            handleChange
                          }
                          sx={inputSx}
                        />

                        {/* Featured */}

                        <Box
                          sx={{
                            display:
                              "flex",
                            alignItems:
                              "center",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Switch
                                name="featured"
                                checked={
                                  formData.featured
                                }
                                onChange={
                                  handleChange
                                }
                              />
                            }
                            label={
                              <Box>
                                <Typography
                                  fontWeight={
                                    600
                                  }
                                >
                                  Featured Course
                                </Typography>

                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  Show this course
                                  as featured
                                </Typography>
                              </Box>
                            }
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Alert
                    severity="info"
                    sx={{
                      mt: 3,
                      borderRadius: 2,
                    }}
                  >
                    Review your changes before
                    clicking Update Course.
                  </Alert>

                  {/* ================================= */}
                  {/* FINAL ACTIONS */}
                  {/* ================================= */}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      justifyContent:
                        "space-between",
                      alignItems: {
                        xs: "stretch",
                        sm: "center",
                      },
                      gap: 2,
                      mt: 4,
                      pt: 3,
                      borderTop:
                        "1px solid #e5e7eb",
                    }}
                  >
                    {/* Previous */}

                    <Button
                      variant="outlined"
                      onClick={() =>
                        setActiveTab(2)
                      }
                      disabled={saving}
                      sx={{
                        borderRadius: 1,
                        textTransform:
                          "none",
                        width: {
                          xs: "100%",
                          sm: "auto",
                        },
                      }}
                    >
                      Previous
                    </Button>

                    {/* Cancel + Update */}

                    <Stack
                      direction={{
                        xs: "column",
                        sm: "row",
                      }}
                      spacing={1.5}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "auto",
                        },
                      }}
                    >
                      <Button
                        type="button"
                        variant="outlined"
                        onClick={() =>
                          navigate(
                            "/admin/job-courses"
                          )
                        }
                        disabled={saving}
                        sx={{
                          borderRadius: 1,
                          textTransform:
                            "none",
                          width: {
                            xs: "100%",
                            sm: "auto",
                          },
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        disabled={saving}
                        sx={{
                          borderRadius: 1,
                          textTransform:
                            "none",
                          px: 4,
                          fontWeight: 700,
                          width: {
                            xs: "100%",
                            sm: "auto",
                          },
                        }}
                      >
                        {saving
                          ? "Updating..."
                          : "Update Course"}
                      </Button>
                    </Stack>
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

export default EditJobCourse;