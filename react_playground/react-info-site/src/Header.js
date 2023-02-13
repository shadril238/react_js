//shadril238
import React from "react"
import "./index.css"
import logo from "./images/react-logo.png"

export default function Header(){
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" alt="react logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}