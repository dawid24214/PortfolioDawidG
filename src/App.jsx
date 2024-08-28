import React from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import './App.css'
import ReactDom from 'react-dom/client'
import {Home} from './js/component/Home.jsx';
import {HomeHeader} from './js/component/HomeHeader.jsx';
import {HomeThreeColumns} from './js/component/HomeThreeColumns.jsx';
import {Start} from './js/component/Start.jsx';
import {WhatAbout} from './js/component/WhatAbout.jsx';
import {AboutUs} from './js/component/AboutUs.jsx';
import {FoundationsOrganizations} from './js/component/FoundationsOrganizations.jsx';
import {Contact} from './js/component/Contact.jsx';

const HomeLayout = () => {
    return(
        <div className= 'App'>
            <Home/>
            <Outlet/>
        </div>
    )
}

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                    <Route path='/HomeHeader' element={<HomeHeader/>}/>
                    <Route path='/HomeThreeColumns' element={<HomeThreeColumns/>}/>

                    <Route path='/Start' element={<Start/>}/>
                    <Route path='/WhatAbout' element={<WhatAbout/>}/>
                    <Route path='/AboutUs' element={<AboutUs/>}/>
                    <Route path='/FoundationsOrganizations' element={<FoundationsOrganizations/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const App = () => {
    return(
        <>
        <Router/>
        </>
    );
}

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);
root.render(<App/>);

export default App;
