import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Button from "./components/Button";
import { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
      <Button  label="increment" onClick={()=> setCount(count+1)}/>
    </>
  );
}
