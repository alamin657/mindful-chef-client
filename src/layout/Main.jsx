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
            <div className='min-h-[calc(100vh)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;