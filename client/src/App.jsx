import "./App.css";
import Header from "./components/layouts/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./views/client/Home";
import About from "./views/client/About";
import Contact from "./views/client/Contact";
import Register from "./views/client/Register";
import Login from "./views/client/Login";
import { useEffect } from "react";
import authVerify from "./api/token";
import { useDispatch } from "react-redux";
import { logout } from "./redux/actions/authAction";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    authVerify(dispatch, logout, navigate);
  }, [navigate, dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
