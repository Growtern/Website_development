import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ViewCourseModal from "./components/ViewCourseModal";
import DeleteModal from "../../dashboard/components/DeleteModal";


import {
  getAllJobCourses,
  deleteJobCourse,
} from "./services/jobCourse.service";

const JobGuaranteedCourses = () => {

  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [deleteCourseId, setDeleteCourseId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openDeleteModal = (id) => {
    setDeleteCourseId(id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteCourseId(null);
    setShowDeleteModal(false);
  };

  const { token } = useSelector((state) => state.auth);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses
  const fetchCourses = async () => {
    try {
      setLoading(true);

      const response = await getAllJobCourses(token);

      if (response.success) {
        setCourses(response.data || []);
      }
    } catch (error) {
      console.error(
        "Failed to fetch job courses:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to load job guaranteed courses."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCourses();
    }
  }, []);

  // Delete course
  const handleDelete = async () => {
    if (!deleteCourseId) return;

    try {
      const response = await deleteJobCourse(
        deleteCourseId,
        token
      );

      if (response.success) {
        toast.success("Course deleted successfully.");

        setCourses((prevCourses) =>
          prevCourses.filter(
            (course) => course._id !== deleteCourseId
          )
        );

        closeDeleteModal();
      }
    } catch (error) {
      console.error(
        "Failed to delete course:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to delete course."
      );
    }
  };

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 py-3 py-md-4">

      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">

        <div>
          <h2 className="fw-bold mb-1 fs-3 fs-md-2">
            Job Oriented Courses
          </h2>

          <p className="text-muted mb-0">
            Manage all job guaranteed courses. Adding course will reflect on Home page and longterm page
          </p>
        </div>

        <button
          type="button"
          className="btn btn-primary px-3 py-2 mt-3"
          onClick={() =>
            navigate("/admin/job-courses/add")
          }
        >
          + Add Course
        </button>

      </div>

      {/* ========================================= */}
      {/* COURSE LIST */}
      {/* ========================================= */}

      <div className="card border-0 shadow-sm rounded-3 overflow-hidden">

        <div className="card-body p-0">

          {/* ===================================== */}
          {/* LOADING */}
          {/* ===================================== */}

          {loading ? (
            <div className="text-center py-5 px-3">

              <div
                className="spinner-border text-primary"
                role="status"
              >
                <span className="visually-hidden">
                  Loading...
                </span>
              </div>

              <p className="text-muted mt-3 mb-0">
                Loading courses...
              </p>

            </div>
          ) : courses.length === 0 ? (

            /* =================================== */
            /* EMPTY STATE */
            /* =================================== */

            <div className="text-center py-5 px-3">

              <div
                className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "64px",
                  height: "64px",
                }}
              >
                <span
                  className="text-primary fw-bold fs-4"
                >
                  +
                </span>
              </div>

              <h5 className="fw-semibold mb-2">
                No Job Guaranteed Courses
              </h5>

              <p className="text-muted mb-3">
                No courses have been added yet.
              </p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  navigate(
                    "/admin/job-courses/add"
                  )
                }
              >
                + Add Job Guaranteed Course
              </button>

            </div>
          ) : (

            <>
              {/* ================================= */}
              {/* DESKTOP / TABLET TABLE */}
              {/* ================================= */}

              <div className="d-none d-md-block">

                <div className="table-responsive">

                  <table className="table table-hover align-middle mb-0">

                    <thead className="table-light">

                      <tr>

                        <th
                          className="px-4 py-3"
                          style={{
                            width: "70px",
                          }}
                        >
                          #
                        </th>

                        <th className="py-3">
                          Course Name
                        </th>

                        <th className="py-3">
                          Batch Start
                        </th>

                        <th className="py-3">
                          Status
                        </th>

                        <th
                          className="text-end px-4 py-3"
                          style={{
                            width: "250px",
                          }}
                        >
                          Actions
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      {courses.map(
                        (course, index) => (

                          <tr key={course._id}>

                            {/* Number */}

                            <td className="px-4">
                              <span className="fw-semibold text-muted">
                                {index + 1}
                              </span>
                            </td>

                            {/* Course */}

                            <td>
                              <div
                                className="fw-semibold text-dark"
                                style={{
                                  maxWidth: "400px",
                                }}
                              >
                                {course.courseTitle}
                              </div>

                              <small className="text-muted">
                                /{course.slug}
                              </small>
                            </td>

                            {/* Batch */}

                            <td className="text-nowrap">
                              {course.nextBatchStartFrom
                                ? new Date(
                                  course.nextBatchStartFrom
                                ).toLocaleDateString()
                                : "-"}
                            </td>

                            {/* Status */}

                            <td>

                              <span
                                className={`badge rounded-pill px-3 py-2 ${course.status ===
                                  "Active"
                                  ? "text-bg-success"
                                  : "text-bg-secondary"
                                  }`}
                              >
                                {course.status}
                              </span>

                            </td>

                            {/* Actions */}

                            <td className="text-end px-4">

                              <div className="d-flex justify-content-end gap-2">

                                {/* View */}

                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-primary px-3"
                                  onClick={() =>
                                    setSelectedCourse(
                                      course
                                    )
                                  }
                                >
                                  View
                                </button>

                                {/* Edit */}

                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-warning px-3"
                                  onClick={() =>
                                    navigate(
                                      `/admin/job-courses/${course._id}/edit`
                                    )
                                  }
                                >
                                  Edit
                                </button>

                                {/* Delete */}

                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-danger px-3"
                                  onClick={() => openDeleteModal(course._id)}

                                >
                                  Delete
                                </button>

                              </div>

                            </td>

                          </tr>

                        )
                      )}

                    </tbody>

                  </table>

                </div>

              </div>

              {/* ================================= */}
              {/* MOBILE CARDS */}
              {/* ================================= */}

              <div className="d-md-none p-2">

                {courses.map(
                  (course, index) => (

                    <div
                      key={course._id}
                      className="border rounded-3 p-3 mb-3 bg-white"
                    >

                      {/* Card Header */}

                      <div className="d-flex justify-content-between align-items-start gap-2 mb-3">

                        <div className="d-flex gap-2">

                          <div
                            className="bg-light rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{
                              width: "38px",
                              height: "38px",
                            }}
                          >
                            <span className="fw-bold text-primary">
                              {index + 1}
                            </span>
                          </div>

                          <div
                            className="min-w-0"
                          >

                            <h6 className="fw-bold mb-1 text-break">
                              {course.courseTitle}
                            </h6>

                            <small className="text-muted text-break">
                              /{course.slug}
                            </small>

                          </div>

                        </div>

                        {/* Status */}

                        <span
                          className={`badge rounded-pill px-2 py-1 flex-shrink-0 ${course.status ===
                            "Active"
                            ? "text-bg-success"
                            : "text-bg-secondary"
                            }`}
                        >
                          {course.status}
                        </span>

                      </div>

                      <hr className="my-3" />

                      {/* Batch Start */}

                      <div className="d-flex justify-content-between align-items-center mb-3">

                        <span className="text-muted small">
                          Batch Start
                        </span>

                        <span className="fw-semibold small">
                          {course.nextBatchStartFrom
                            ? new Date(
                              course.nextBatchStartFrom
                            ).toLocaleDateString()
                            : "-"}
                        </span>

                      </div>

                      {/* Actions */}

                      <div className="d-grid gap-2">

                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() =>
                            setSelectedCourse(
                              course
                            )
                          }
                        >
                          View Course
                        </button>

                        <div className="row g-2">

                          <div className="col-6">

                            <button
                              type="button"
                              className="btn btn-outline-warning w-100"
                              onClick={() =>
                                navigate(
                                  `/admin/job-courses/${course._id}/edit`
                                )
                              }
                            >
                              Edit
                            </button>

                          </div>

                          <div className="col-6">

                            <button
                              type="button"
                              className="btn btn-outline-danger w-100"
                              onClick={() => openDeleteModal(course._id)}
                            >
                              Delete
                            </button>

                          </div>

                        </div>

                      </div>

                    </div>

                  )
                )}

              </div>
            </>
          )}

        </div>
      </div>




      {/* ========================================= */}
      {/* VIEW MODAL */}
      {/* ========================================= */}

      <ViewCourseModal
        course={selectedCourse}
        onClose={() =>
          setSelectedCourse(null)
        }
      />

      {/* Delete modal */}
      <DeleteModal
        show={showDeleteModal}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        title="Delete Course"
        message="Are you sure you want to delete this course?"
      />
    </div>
  );
};

export default JobGuaranteedCourses;