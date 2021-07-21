import React from "react"
import './Nav.css'

export default function Nav() {
    return (
        <nav className="nav">        
            <a href='/' className="nav__link">Profile</a>
            <a href='/' className="nav__link">Messages</a>
            <a href='/' className="nav__link">News</a>
            <a href='/' className="nav__link">Music</a>
            <br/>
            <br/>
            <a href='/'>Settings</a>      
        </nav>
    );
} 