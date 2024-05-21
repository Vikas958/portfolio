import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home.jsx";
import "./App.css";
import "./home.css";
import "./index.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
