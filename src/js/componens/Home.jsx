import React from "react";
import {Link} from "react-router-dom";

export const Home = () =>{
    return(
        <div>
            <a>Jestem tutaj</a>
            <Link to='/HomeHeader'>
                <button>Zaloguj się</button>
            </Link>
            <Link to='/HomeThreeColumns'>
                <button>Zarejestruj się</button>
            </Link>

        </div>
    )
}