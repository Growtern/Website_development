import React from "react";

// installed this form marquee animation
import Marquee from "react-fast-marquee";

const CareerRoles = ({ roles = [] }) => {
  const firstRow = roles.slice(0, Math.ceil(roles.length / 2));
  const secondRow = roles.slice(Math.ceil(roles.length / 2));

  const RoleCard = ({ role }) => (
    <div
      className="career-card rounded-3 shadow-sm text-center py-2 px-4 mx-2"
      style={{
        background: "#fff",
        borderTop: "4px solid #ff9800",
        minWidth: "240px",
        transition: "all .3s ease",
        cursor: "pointer",
      }}
    >
      <h6
        className="mb-0 fw-semibold"
        style={{
          color: "black",
          fontSize: "0.95rem",
          whiteSpace: "nowrap",
        }}
      >
        {role}
      </h6>
    </div>
  );

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#0571a7",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">
            What Could You Become?
          </h2>

          <div
            className="mx-auto my-3"
            style={{
              width: "180px",
              height: "4px",
              background: "#ff9800",
              borderRadius: "20px",
            }}
          />

          <p
            className="mb-0"
            style={{
              color: "rgba(255,255,255,.8)",
              fontSize: "1.1rem",
            }}
          >
            Explore the career opportunities after completing this program.
          </p>
        </div>

        {/* First Row */}
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover
          direction="right"
          className="mb-4"
          autoFill={true}
        >
          {firstRow.map((role, index) => (
            <RoleCard key={index} role={role} />
          ))}
        </Marquee>

        {/* Second Row */}
        {secondRow.length > 0 && (
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover
            direction="left"
            autoFill={true}
          >
            {secondRow.map((role, index) => (
              <RoleCard key={index} role={role} />
            ))}
          </Marquee>
        )}

      </div>
    </section>
  );
};

export default CareerRoles;