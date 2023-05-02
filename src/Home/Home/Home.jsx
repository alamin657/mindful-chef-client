import React from 'react';

const Home = () => {
    return (
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

    );
};

export default Home;