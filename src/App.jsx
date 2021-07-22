import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
// import About from "./components/About/About";

export default function App() {
  return (
    <div className="app-wrapper">      
      <Header/>
      <Nav/>      
      <div className="app-wrapper-content">
        <Dialogs/>
        {/* <About/> */}
      </div>
    </div>
  );
}

