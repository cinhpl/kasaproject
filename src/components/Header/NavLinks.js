import React from "react";
import {Link} from "react-router-dom";

export default function Header(props) {
    return (
                <ul>
                    <li 
                        onClick={() => props.isResponsive && props.closeNav()}>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li 
                        onClick={() => props.isResponsive && props.closeNav()}>
                        <Link to='/about'>À propos</Link>
                    </li>
                </ul>
    )
}