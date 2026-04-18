import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Tutorials from "./pages/tutorials";
import { Routes, Route } from "react-router-dom";
import Footer from "./pages/footer";
import ReactTutorial from "./pages/Tutorials/reactTutorial";
import JavaTutorial from "./pages/Tutorials/javaTutorials";
import JavascriptTutorial from "./pages/Tutorials/javascriptTutorial";
import DSATutorial from "./pages/Tutorials/dsatutorial";
// Prism (for code highlighting)
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-java";
import DSASheet from "./pages/Tutorials/dsasheet";


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/react" element={<ReactTutorial />} />
        <Route path="/tutorials/java" element={<JavaTutorial />} />
        <Route path="/tutorials/javascript" element={<JavascriptTutorial />} />
        <Route path="/tutorials/dsa" element={<DSATutorial />} />

        <Route path="/tutorials/dsasheet" element={<DSASheet />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
