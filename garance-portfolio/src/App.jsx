import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Card, Skills } from "./components";
import { Home, About, Projects, Error, Contact } from "./pages";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/projects"
          element={Projects}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
      <Card></Card>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
