const ViewCourseModal = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <div>
                <h5 className="modal-title fw-bold mb-1">
                  {course.courseTitle}
                </h5>

                <small className="text-muted">
                  Course Details
                </small>
              </div>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">

              {/* Course Image */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">
                  Course Image
                </h6>

                {course.image?.url ? (
                  <div className="border rounded p-2">
                    <img
                      src={course.image.url}
                      alt={
                        course.courseTitle ||
                        "Course"
                      }
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : (
                  <p className="text-muted mb-0">
                    No course image uploaded.
                  </p>
                )}
              </div>

              {/* Basic Information */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">
                  Basic Information
                </h6>

                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="border rounded p-3 h-100">
                      <small className="text-muted d-block">
                        Course Title
                      </small>

                      <div className="fw-semibold">
                        {course.courseTitle || "-"}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="border rounded p-3 h-100">
                      <small className="text-muted d-block">
                        Slug
                      </small>

                      <div className="fw-semibold">
                        {course.slug || "-"}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded p-3 h-100">
                      <small className="text-muted d-block">
                        Next Batch
                      </small>

                      <div className="fw-semibold">
                        {course.nextBatchStartFrom
                          ? new Date(
                              course.nextBatchStartFrom
                            ).toLocaleDateString()
                          : "-"}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded p-3 h-100">
                      <small className="text-muted d-block">
                        Status
                      </small>

                      <div>
                        <span
                          className={`badge ${
                            course.status === "Active"
                              ? "text-bg-success"
                              : "text-bg-secondary"
                          }`}
                        >
                          {course.status || "-"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded p-3 h-100">
                      <small className="text-muted d-block">
                        Display Order
                      </small>

                      <div className="fw-semibold">
                        {course.displayOrder ?? 0}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">
                  Curriculum
                </h6>

                <div className="border rounded p-3 bg-light">
                  <p className="mb-0">
                    {course.curriculum || "-"}
                  </p>
                </div>
              </div>

              {/* Syllabus PDF */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">
                  Syllabus PDF
                </h6>

                {course.syllabusPdf?.url ? (
                  <a
                    href={course.syllabusPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    View Syllabus PDF
                  </a>
                ) : (
                  <p className="text-muted mb-0">
                    No syllabus PDF uploaded.
                  </p>
                )}
              </div>

              {/* Plans */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">
                  Plans
                </h6>

                {course.plans?.length > 0 ? (
                  <div className="row g-3">
                    {course.plans.map((plan, index) => (
                      <div
                        className="col-md-6"
                        key={index}
                      >
                        <div className="border rounded p-3 h-100">

                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="fw-bold mb-0">
                              {plan.title || plan.type}
                            </h6>

                            {plan.popular && (
                              <span className="badge text-bg-warning">
                                Popular
                              </span>
                            )}
                          </div>

                          {plan.subtitle && (
                            <p className="text-muted small mb-2">
                              {plan.subtitle}
                            </p>
                          )}

                          <div className="mb-2">
                            <strong>Type:</strong>{" "}
                            {plan.type || "-"}
                          </div>

                          <div className="mb-2">
                            <strong>Mode:</strong>{" "}
                            {plan.mode || "-"}
                          </div>

                          <div className="mb-2">
                            <strong>Price:</strong>{" "}
                            {plan.price ?? "-"}
                          </div>

                          <div className="mb-2">
                            <strong>Original Price:</strong>{" "}
                            {plan.originalPrice ?? "-"}
                          </div>

                          <div className="mb-2">
                            <strong>Duration:</strong>{" "}
                            {plan.duration || "-"}
                          </div>

                          <div className="mb-2">
                            <strong>Batch Size:</strong>{" "}
                            {plan.batchSize || "-"}
                          </div>

                          {plan.badge && (
                            <div className="mb-2">
                              <strong>Badge:</strong>{" "}
                              {plan.badge}
                            </div>
                          )}

                          {plan.features?.length > 0 && (
                            <div className="mt-3">
                              <strong>Features:</strong>

                              <ul className="mt-2 mb-0">
                                {plan.features.map(
                                  (feature, featureIndex) => (
                                    <li key={featureIndex}>
                                      {feature}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}

                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted mb-0">
                    No plans available.
                  </p>
                )}
              </div>

              {/* Modules */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">
                  Modules
                </h6>

                {course.modules?.length > 0 ? (
                  <div className="accordion" id="courseModulesAccordion">
                    {course.modules.map((module, index) => (
                      <div
                        className="accordion-item"
                        key={index}
                      >
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              index !== 0 ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#module-${index}`}
                          >
                            {module.title ||
                              `Module ${index + 1}`}
                          </button>
                        </h2>

                        <div
                          id={`module-${index}`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                        >
                          <div className="accordion-body">

                            {module.category && (
                              <p className="mb-2">
                                <strong>Category:</strong>{" "}
                                {module.category}
                              </p>
                            )}

                            {module.points?.length > 0 ? (
                              <ul className="mb-0">
                                {module.points.map(
                                  (point, pointIndex) => (
                                    <li key={pointIndex}>
                                      {point}
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p className="text-muted mb-0">
                                No module points available.
                              </p>
                            )}

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted mb-0">
                    No modules available.
                  </p>
                )}
              </div>

              {/* Roles */}
              <div className="mb-3">
                <h6 className="fw-bold mb-3">
                  Career Roles
                </h6>

                {course.roles?.length > 0 ? (
                  <div className="d-flex flex-wrap gap-2">
                    {course.roles.map((role, index) => (
                      <span
                        className="badge text-bg-light border text-dark"
                        key={index}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted mb-0">
                    No career roles available.
                  </p>
                )}
              </div>

            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCourseModal;