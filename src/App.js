import React from "react";
import { Home, RoutePage } from "./pages";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className="app" style={theme}>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/theme-menu">Theme Menu</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<RoutePage type="counter" />} />
        <Route path="/timer" element={<RoutePage type="timer" />} />
        <Route path="/theme-menu" element={<RoutePage type="theme-menu" />} />
      </Routes>
    </div>
  );
};

export default App;
