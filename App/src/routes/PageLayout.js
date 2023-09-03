import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import page components
import Home from "../pages/Home/Home";

/**
 * Defines the application's routes using React Router.
 *
 * @returns {JSX.Element} The rendered route configuration
 */
function AppRoute() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoute;
