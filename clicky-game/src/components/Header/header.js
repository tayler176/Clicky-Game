import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light header">
            </nav>
            <div className='scoreDiv'>
                <p className='score'>Score: {props.score}</p>
                <p className='score'>High Score: {props.highScore}</p>
            </div>
        </div>
    )
}

export default Header;