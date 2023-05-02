import React from 'react';

const ChefRecipe2 = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-center text-2xl'>Different Chef Recipe foods</h2>
            <div className='grid grid-cols-3 mt-2'>
                <div className="card mx-auto w-80 bg-base-100 border border-red-500">
                    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1200px-Hyderabadi_Chicken_Biryani.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p> Biryani is a popular rice dish that is commonly served in Bangladesh. The rice is typically cooked with a variety of spices and meat, such as chicken or beef. It is often served with a side of cucumber raita and salad.</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100  border border-red-500">
                    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1200px-Hyderabadi_Chicken_Biryani.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Shorshe Ilish is a popular fish dish that is made with Hilsa fish, a type of fish that is commonly found in the rivers of Bangladesh. The fish is typically marinated in mustard oil and spices and then cooked in a spicy mustard sauce.</p>

                    </div>
                </div>
                <div className="card  w-80 bg-base-100  border border-red-500">
                    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1200px-Hyderabadi_Chicken_Biryani.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Bhaji is a popular vegetable dish that is made with a variety of vegetables, such as onions, potatoes, and eggplant. The vegetables are typically fried with a variety of spices and served as a side dish.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe2;