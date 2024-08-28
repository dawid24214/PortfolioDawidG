import React from "react";
import {Link} from "react-router-dom";

export const Home = () =>{
    return(
        <div>
            <a>Jestem tutaj</a>
            <Link to='/HomeHeader'>
                <button>Idz do HomeHeader</button>
            </Link>

            <Link to='/HomeThreeColumns'>
                <button>HomeThreeColumns</button>
            </Link>

        </div>
    )
}