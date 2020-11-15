import React from 'react';
import './App.css';
import Router from "./pages";
import NavBrand from "./components/nav-brand/NavBrand";

function App() {
  return (
    <div className="App">
      <Router />
      <div className="intro">
        <div className="logo">
        <NavBrand />
        </div>
      </div>
    </div>
  );
}

export default App;

