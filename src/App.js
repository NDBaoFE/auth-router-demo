import React from 'react';
import './App.css';
import Home from "./components/Home";
import Login from './components/Login';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/"  element={<Home/>}/>
        </Routes>
        </Router>

    </div>
  );
}

export default App;
