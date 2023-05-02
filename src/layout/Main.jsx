import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import Chefdetail from '../shared/pages/Chefdetail';
import ChefRecipe1 from '../shared/pages/ChefRecipe1';
import ChefRecipe2 from '../shared/pages/ChefRecipe2';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <div className='min-h-[calc(100vh)]'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;