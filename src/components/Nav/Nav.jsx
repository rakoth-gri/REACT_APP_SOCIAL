import React from "react"
import nav from './Nav.module.css'
// можно, в принципе, как угодно называть объект: style и т.д.*********

export default function Nav() {
    return (
        <nav className={nav.nav}>        
            <a href='/' className={nav.item}>Profile</a>
            <a href='/' className={nav.item}>Messages</a>
            <a href='/' className={nav.item}>News</a>
            <a href='/' className={nav.item}>Music</a>
            <br/>
            <br/>
            <a href='/' className={nav.item}>Settings</a>      
        </nav>
    );
} 