import "./App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import RepoCard from "./components/RepoCard";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./context/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext); // <<< use theme here
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;
    let ignore = false;

    async function fetchRepos() {
      try {
        setLoading(true);
        setError("");
        setRepos([]);
        const url = `https://api.github.com/users/${query}/repos`;
        const res = await axios.get(url);
        if (!ignore) setRepos(res.data);
      } catch (err) {
        if (!ignore) {
          if (err.response?.status === 404) setError("User not found.");
          else if (err.response?.status === 403)
            setError("Rate limit hit. Try again later.");
          else setError("Failed to fetch repositories. Please try again.");
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchRepos();
    return () => {
      ignore = true;
    };
  }, [query]);

  function handleSearch(user) {
    setQuery(user.trim());
  }

  return (
    <div className={`app ${theme}`}>
      <header style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h1>GitHub Repo Finder</h1>
        <ThemeToggle />
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {!loading && error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && query && repos.length === 0 && (
        <p>No repositories found.</p>
      )}

      {!loading &&
        !error &&
        repos.map((repo) => (
          <RepoCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
          />
        ))}
    </div>
  );
}
