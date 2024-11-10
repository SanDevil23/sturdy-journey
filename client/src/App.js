import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import VisitorForm from "./pages/VisitorForm";
// import AboutSection from './components/AboutSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/add-visitor" element={<VisitorForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
