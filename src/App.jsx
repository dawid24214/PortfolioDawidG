import React from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import ReactDom from 'react-dom/client.js';
import './App.css'
import {Header} from "react-native/Libraries/NewAppScreen";
import Home from  './js/componens/Home.jsx';

const HomeLayout = () => {
    return(
        <div className= 'App'>
            <Home/>
            <Header/>
            <Outlet/>
        </div>
    )
}

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const App = () =>{
    return(
        <>
            <Router/>
        </>
    );
}

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);
root.render(<App/>);


