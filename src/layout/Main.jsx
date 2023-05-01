import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Home></Home> */}
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;