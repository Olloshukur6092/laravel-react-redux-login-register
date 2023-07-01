import "./App.css";
import Header from "./components/layouts/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./views/client/Home";
import About from "./views/client/About";
import Contact from "./views/client/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
