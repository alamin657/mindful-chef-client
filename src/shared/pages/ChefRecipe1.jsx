
import React from 'react';

const ChefRecipe1 = () => {
    return (
        <div>
            <h2 className='text-center text-2xl'>Different Chef Recipe</h2>
            <div className='grid md:grid-cols-3  mt-2 '>
                <div className="card mx-auto w-80 bg-base-100 border border-red-500 md:ml-4 ">
                    <figure><img src="https://img.theculturetrip.com/wp-content/uploads/2020/05/chivito-uruguay-sandwich-e1593078593476.jpg" alt="Shoes" /></figure>
                    <div className="card-body bg-sky-400">
                        <p>A burger is a popular sandwich that typically consists of a meat patty, lettuce, tomato, onions, and cheese, sandwiched between two halves of a soft, round bun</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100  border border-red-500 md:mt-2 md:ml-4 ml-8 mt-4">
                    <figure><img src="https://i.ytimg.com/vi/7xEDpoZm6Co/maxresdefault.jpg" alt="Shoes" /></figure>
                    <div className="card-body bg-sky-400">
                        <p>"Vaji" is a Bengali term for vegetable stir-fry or sautéed vegetables. It's a popular cooking technique in Bengali cuisine, where a mix of vegetables are quickly cooked with spices and served as a side dish or a main course.</p>

                    </div>
                </div>
                <div className="card  w-80 bg-base-100  border border-red-500  md:ml-4 ml-8 mt-4">
                    <figure><img src="https://i.ytimg.com/vi/47fRmufjdQ4/maxresdefault.jpg" alt="Shoes" /></figure>
                    <div className="card-body bg-sky-400">
                        <p>DHAKAI PARATHA RECIPE | DHAKAI POROTA | BENGALI FLAKY LAYERED PARATHA
                            Dhakai Paratha Bengali Food Photography Styling
                            Dhakai Porota or Dhakai Paratha is one of the most famous Bengali old-school street food which is equally popular in both sides of the border, Kolkata and Dhaka.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe1;