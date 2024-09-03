import React from "react";
import {Link} from "react-router-dom";
import '/src/scss/component/_home.scss';

export const Home = () =>{
    return(
        <>
            <header className='header__container'>
                <section className='header__registration container'>
                    <Link to='/HomeHeader' className='homeheader__container'>
                        <a href=''>Zaloguj</a>
                    </Link>
                    <Link to='/HomeThreeColumns' className='homethreecolumns__container'>
                        <a href=''>Załóż konto</a>
                    </Link>
                </section>

                <section className='header__menu container'>
                    <Link to='/Start'>
                        <a href=''>Start</a>
                    </Link>

                    <Link to='/WhatAbout'>
                        <a href=''>O co chodzi?</a>
                    </Link>

                    <Link to='/AboutUs'>
                        <a href=''>O nas</a>
                    </Link>

                    <Link to='/FoundationsOrganizations'>
                        <a href=''>Fundacja i organizacje</a>
                    </Link>

                    <Link to='/Contact'>
                        <a href=''>Kontakt</a>
                    </Link>

                </section>
            </header>

        </>
    )
}
