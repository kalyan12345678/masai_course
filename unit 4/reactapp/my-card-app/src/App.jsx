import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./card";

function App() {
  const [age, setAge] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    setSubmitted(true);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter Your name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={age}
        placeholder="Enter Your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <textarea
        name="note"
        id="note"
        placeholder="Write Your Bio Here"
        onChange={(e) => setBio(e.target.value)}
      ></textarea>
      <button onClick={submit}>Submit</button>

      {submitted && (
        <div>
          <ProfileCard name={name} age={age} bio={bio} />
        </div>
      )}
    </>
  );
}

export default App;
