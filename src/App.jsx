import React from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import './App.css'
import ReactDom from 'react-dom/client'
import {Home} from  './js/componens/Home.jsx';
import {HomeHeader} from './js/componens/HomeHeader.jsx';
import {HomeThreeColumns} from './js/componens/HomeThreeColumns.jsx';

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
