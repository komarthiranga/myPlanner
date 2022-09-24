import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const Login = React.lazy(() => import("./components/Login"));
const Dashboard = React.lazy( () => import("./components/Dashboard") )
function App() {
  return (
    <Suspense fallback={<p>Loading please wait...</p>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
