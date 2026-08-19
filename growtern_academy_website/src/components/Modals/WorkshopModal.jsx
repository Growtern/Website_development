import React, { useState } from "react";

const WorkshopModal = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    whatsappNumber: "",
    qualification: "",
    // course: "Na",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("=== FORM DATA BEFORE SUBMIT ===");
    console.log(formData);

    onFormSubmit(formData);
  };

  return (
    <form
      className="career-form"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
    >
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        required
        value={formData.fullName}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email ID"
        required
        value={formData.email}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      />

      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        required
        value={formData.contactNumber}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      />

      <input
        type="text"
        name="whatsappNumber"
        placeholder="WhatsApp Number"
        value={formData.whatsappNumber}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      />

      <select
        name="qualification"
        required
        value={formData.qualification}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      >
        <option value="" disabled>
          Select Qualification
        </option>
        <option value="12th">12th</option>
        <option value="Diploma">Diploma</option>
        <option value="B-tech">B-tech</option>
        <option value="B.sc">B.sc</option>
        <option value="M-tech">M-tech</option>
        <option value="MCA">MCA</option>
        <option value="BCA">BCA</option>
        <option value="Others">Others</option>
      </select>

      {/* <select
        name="course"
        required
        value={formData.course}
        onChange={handleChange}
        style={{ flex: "1 1 calc(50% - 15px)" }}
      >
        <option value="">Choose Your Interest</option>
        <option value="a-Test">
          A Test
        </option>
        <option value="B-Test">
          B Test
        </option>
        <option value="C-Test">
          C Test
        </option>
        <option value="E-Test">
          E Test
        </option>
        <option value="F Test">
          F Test
        </option>
      </select> */}

      <div className="btn-container" style={{ flex: "1 1 100%" }}>
        <button type="submit" className="Modal-Button">
          Proced To Payment
        </button>
      </div>
    </form>
  );
};

export default WorkshopModal;