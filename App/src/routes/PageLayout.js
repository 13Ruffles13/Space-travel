import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import page components
import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild";
import Spacecraft from "../pages/Spacecraft/Spacecraft";

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
      {/* Spacecraft Page */}
      <Route path="/spacecrafts" element={<Spacecrafts />} />
      {/* Build a Spacecraft */}
      <Route path="/spacecraft/build" element={<SpacecraftBuild />} />
      {/* Spacecraft Page for individual spacecraft page*/}
      <Route path="/spacecraft/:id" element={<Spacecraft />} />
    </Routes>
  );
}

export default AppRoute;
