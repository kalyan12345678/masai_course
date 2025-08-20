import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./RepoDetails.css";

function RepoDetails({ repo, onClose }) {
  const { theme } = useContext(ThemeContext);
  if (!repo) return null;
  return (
    <div className={`repo-details-modal ${theme}`} style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div className="repo-details-content">
        <button onClick={onClose}>✖</button>
        <h2>{repo.name}</h2>
        <p>{repo.description || "No description"}</p>
        <p><b>Owner:</b> {repo.owner?.login}</p>
        <p><b>Stars:</b> {repo.stargazers_count}</p>
        <p><b>Forks:</b> {repo.forks_count}</p>
        <p><b>Language:</b> {repo.language || "N/A"}</p>
        <p><b>Visibility:</b> {repo.visibility}</p>
        <p><b>Created at:</b> {new Date(repo.created_at).toLocaleString()}</p>
        <p><b>Updated at:</b> {new Date(repo.updated_at).toLocaleString()}</p>
        <p><b>Open Issues:</b> {repo.open_issues_count}</p>
        <p><b>Watchers:</b> {repo.watchers_count}</p>
        <p><b>URL:</b> <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a></p>
      </div>
    </div>
  );
}

export default RepoDetails;
