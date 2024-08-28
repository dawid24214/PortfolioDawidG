import React from "react";
import {Link} from "react-router-dom";

export const Home = () =>{
    return(
        <>
        <header className='header__container'>
            <section className='header__registration container'>
            <Link to='/HomeHeader' className='homeheader__container'>
                <button>Zaloguj się</button>
            </Link>
            <Link to='/HomeThreeColumns' className='homethreecolumns__container'>
                <button>Zarejestruj się</button>
            </Link>
            </section>

           <section className='header__menu container'>
               <Link to=''>
                   <a href='#'></a>
               </Link>

               <Link to=''>
                   <a href='#'></a>
               </Link>

               <Link to=''>
                   <a href='#'></a>
               </Link>

               <Link to=''>
                   <a href='#'></a>
               </Link>

               <Link to=''>
                   <a href='#'></a>
               </Link>

           </section>
        </header>

        </>
    )
}
