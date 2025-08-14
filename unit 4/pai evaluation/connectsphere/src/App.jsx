import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </div>
    </>
  );
}
