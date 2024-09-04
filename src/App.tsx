// App.tsx
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Appbar from "./components/Appbar";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Profile from "./components/Profile";

export default function App() {
  const location = useLocation();
  const hideAppBarPaths = ["/profile"];

  return (
    <div>
      {!hideAppBarPaths.includes(location.pathname) && <Appbar />}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
