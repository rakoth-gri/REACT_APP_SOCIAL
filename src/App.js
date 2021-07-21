import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";

export default function App() {
  return (
    <div className="app-wrapper">      
      <Header/>
      <Nav/>
      <About/>
    </div>
  );
}

