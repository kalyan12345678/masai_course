// src/components/Settings.jsx
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Settings = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUser({ name, email });
    alert("Profile updated!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Settings</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: 15 }}>Update</button>
      </form>
    </div>
  );
};

export default Settings;
