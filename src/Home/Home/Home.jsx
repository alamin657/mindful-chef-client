import React from 'react';
import Chefdetail from '../../shared/pages/Chefdetail';
import ChefRecipe1 from '../../shared/pages/ChefRecipe1';
import ChefRecipe2 from '../../shared/pages/ChefRecipe2';

const Home = () => {
    return (
        <div>
            <div className="carousel  ">
                <div id="slide1" className="carousel-item relative w-full h-96 bg-cover">
                    <img src="https://img.freepik.com/free-photo/ingredients-cooking-gray-concrete_127032-2082.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <p className='text-center'>Break out these mouth-watering vegan recipes when you’re in the mood for finger <br /> food that tastes like classic pub grub minus all the unhealthy ingredients.</p>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96 bg-cover">
                    <img src="https://img.freepik.com/premium-photo/different-cooking-ingredients-spices-white-background_185193-88914.jpg?w=2000" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className='text-center'>Break out these mouth-watering vegan recipes when you’re in the mood for finger <br /> food that tastes like classic pub grub minus all the unhealthy ingredients.</p>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative  w-full h-96 bg-cover">
                    <img src="https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className='text-center'>Break out these mouth-watering vegan recipes when you’re in the mood for finger <br /> food that tastes like classic pub grub minus all the unhealthy ingredients.</p>
                        <a href="#slide4" className="btn btn-circle">❯</a>

                    </div>
                </div>
            </div>
            <Chefdetail></Chefdetail>
            <ChefRecipe1></ChefRecipe1>
            <ChefRecipe2></ChefRecipe2>
        </div>

    );
};

export default Home;