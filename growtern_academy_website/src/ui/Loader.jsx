import React from "react";

export default function Loader({ size = 20, color = "#fff" }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        border: `3px solid ${color}`,
        borderTop: "3px solid transparent",
        borderRadius: "50%",
        display: "inline-block",
        animation: "spin 0.8s linear infinite",
      }}
    />
  );
}
