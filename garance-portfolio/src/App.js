import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, About, Projects, Error } from "./pages";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={{ Home }}>
        </Route>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Error></Error>
        <Projects></Projects>
        <p>Tetxte</p>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
