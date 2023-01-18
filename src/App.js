import React from "react";
import Header from "./components/Header";
import "./style/App.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./style/tabletmediaQuery.scss";
import "./style/mobilemediaQuery.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
