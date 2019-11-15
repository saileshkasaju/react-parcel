import React from "react";
import { Router, Link } from "@reach/router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
        </nav>
      </header>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
};

export default App;
