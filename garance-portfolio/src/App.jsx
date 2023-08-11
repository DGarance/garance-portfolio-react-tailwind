import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Card } from "./components";
import { Home, About, Projects, Error } from "./pages";
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
          path="*"
          element={<Error />}
        />
      </Routes>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
