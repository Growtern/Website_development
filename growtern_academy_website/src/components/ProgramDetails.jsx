import React, { useState } from "react";
import { FaPlus, FaMinus, FaCircle, FaCode, FaServer, FaDatabase, FaBrain, FaProjectDiagram } from "react-icons/fa";

const CourseCurriculum = ({ CurriculumData, moduleData }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Group modules by category
  const categorizeModules = () => {
    const categories = {
      Frontend: [],
      Backend: [],
      Database: [],
      AI: [],
      Project: [],
      Other: []
    };

    moduleData?.forEach((module) => {
      const category = module.category || "Other";
      if (categories[category]) {
        categories[category].push(module);
      } else {
        categories.Other.push(module);
      }
    });

    return categories;
  };

  const categorizedModules = categorizeModules();

  // Get icon for category
  const getCategoryIcon = (category) => {
    const icons = {
      Frontend: <FaCode size={16} />,
      Backend: <FaServer size={16} />,
      Database: <FaDatabase size={16} />,
      AI: <FaBrain size={16} />,
      Project: <FaProjectDiagram size={16} />
    };
    return icons[category] || <FaCircle size={10} />;
  };

  // Get Bootstrap color for category
  const getCategoryBootstrapColor = (category) => {
    const colors = {
      Frontend: "primary",
      Backend: "success",
      Database: "warning",
      AI: "info",
      Project: "danger"
    };
    return colors[category] || "secondary";
  };

  const categories = ["All", "Frontend", "Backend", "Database", "AI", "Project"];

  const getFilteredCategories = () => {
    if (activeCategory === "All") {
      return categorizedModules;
    }
    return { [activeCategory]: categorizedModules[activeCategory] };
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3">Course Curriculum</h2>
          <p className="text-muted mx-auto px-3" style={{ maxWidth: '700px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Master full-stack development With AI.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                const color = getCategoryBootstrapColor(category);

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`btn ${isActive
                        ? `btn-${color}`
                        : 'btn-outline-dark'
                      } rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-semibold`}
                    style={{
                      transition: 'all 0.3s ease',
                      border: isActive ? 'none' : '2px solid #dee2e6'
                    }}
                  >
                    {category !== "All" && (
                      <span className={isActive ? 'text-white' : `text-${color}`}>
                        {getCategoryIcon(category)}
                      </span>
                    )}
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {Object.entries(filteredCategories).map(([categoryName, modules]) => {
              if (!modules || modules.length === 0) return null;

              return (
                <div key={categoryName} className="mb-5">
                  {/* Category Header - Only show when "All" is selected */}
                  {activeCategory === "All" && (
                    <div className="mb-3">
                      <div
                        className={`card border-0 shadow-sm`}
                        style={{
                          borderLeft: `4px solid var(--bs-${getCategoryBootstrapColor(categoryName)})`,
                          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                        }}
                      >
                        <div className="card-body py-2">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                              <div
                                className={`bg-${getCategoryBootstrapColor(categoryName)} bg-opacity-10 rounded-circle p-3 d-flex align-items-center justify-content-center`}
                                style={{ width: '40px', height: '40px' }}
                              >
                                <span className={`text-${getCategoryBootstrapColor(categoryName)}`}>
                                  {getCategoryIcon(categoryName)}
                                </span>
                              </div>
                              <h4 className="mb-0 fw-bold">{categoryName}</h4>
                            </div>
                            <span className={`badge bg-${getCategoryBootstrapColor(categoryName)} bg-opacity-10 text-${getCategoryBootstrapColor(categoryName)} px-3 py-2 fw-semibold`}>
                              {modules.length} {modules.length === 1 ? 'Module' : 'Modules'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Module Cards */}
                  <div className="accordion" id={`accordion-${categoryName}`}>
                    {modules.map((module, index) => {
                      const globalIndex = `${categoryName}-${index}`;
                      const isOpen = openIndex === globalIndex;
                      const color = getCategoryBootstrapColor(categoryName);

                      return (
                        <div key={globalIndex} className="mb-3">
                          <div className="card border-0 shadow-sm h-100" style={{ overflow: 'hidden' }}>
                            {/* Module Header */}
                            <div
                              className="card-header bg-white border-0 p-0"
                              style={{ cursor: 'pointer' }}
                              onClick={() => toggleModule(globalIndex)}
                            >
                              <div className="d-flex justify-content-between align-items-center p-3 p-md-4">
                                <div className="d-flex align-items-center gap-3 flex-grow-1">
                                  <div
                                    className={`bg-${color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center`}
                                    style={{ width: '40px', height: '40px', minWidth: '40px' }}
                                  >
                                    <FaCircle className={`text-${color}`} size={12} />
                                  </div>
                                  <h6 className="mb-0 fw-semibold" style={{ fontSize: '1.05rem' }}>
                                    {module.title}
                                  </h6>
                                </div>
                                <div
                                  className={`bg-${isOpen ? 'danger' : 'warning'} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center`}
                                  style={{ width: '36px', height: '36px', minWidth: '36px' }}
                                >
                                  {isOpen ? (
                                    <FaMinus className="text-danger" size={14} />
                                  ) : (
                                    <FaPlus className="text-warning" size={14} />
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Module Body - Points */}
                            {isOpen && (
                              <div className="card-body pt-0 pb-4 px-3 px-md-4">
                                <div className="ps-2 ps-md-5">
                                  <ul className="list-unstyled mb-0">
                                    {module.points.map((point, pIndex) => (
                                      <li
                                        key={pIndex}
                                        className="mb-2 d-flex align-items-start"
                                        style={{ fontSize: '0.95rem' }}
                                      >
                                        <span className={`text-${color} me-2 mt-1`} style={{ fontSize: '0.7rem' }}>●</span>
                                        <span className="text-secondary">{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* No modules message */}
            {moduleData && moduleData.length === 0 && (
              <div className="text-center py-5">
                <div className="mb-3">
                  <FaCircle className="text-muted" size={48} style={{ opacity: 0.3 }} />
                </div>
                <p className="text-muted fs-5 mb-0">No modules available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;