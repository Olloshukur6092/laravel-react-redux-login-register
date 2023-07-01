import "./App.css";
import Header from "./components/layouts/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./views/client/Home";
import About from "./views/client/About";
import Contact from "./views/client/Contact";
import Register from "./views/client/Register";
import Login from "./views/client/Login";

function App() {
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
