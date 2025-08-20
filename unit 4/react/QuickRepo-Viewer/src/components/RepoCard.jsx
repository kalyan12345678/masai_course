import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function RepoCard({ name, description, stars, forks, }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`repo-card ${theme}`} style={{ padding: 16, borderRadius: 8, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <h3>{name}</h3>
      <p>{description || "No description"}</p>
      <small>⭐ {stars} | 🍴 {forks}</small>


    </div>
  );
}


export default React.memo(RepoCard);
