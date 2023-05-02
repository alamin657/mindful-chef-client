import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home/Home';
import Chefdetail from '../shared/pages/Chefdetail';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Home></Home> */}
            <div className='min-h-[calc(100vh)]'>
                <Outlet></Outlet>
            </div>
            <Chefdetail></Chefdetail>
            <Footer></Footer>

        </div>
    );
};

export default Main;