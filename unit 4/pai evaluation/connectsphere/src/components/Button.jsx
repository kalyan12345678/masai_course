import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "10px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "blue",
        color: "white",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
};

export default Button;
