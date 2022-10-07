import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
        <ul>
            <Link to='/'>Accueil </Link>
            <Link to='/about'>À propos</Link>
        </ul>
    </nav>
    )
}