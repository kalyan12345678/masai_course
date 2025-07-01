
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <nav style={{ padding: 10, gap: 10 }}>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/settings">Settings</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
