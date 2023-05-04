import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegStar } from "react-icons/fa";
const Review = () => {
    const [favourite, setFavourite] = useState(false)
    const notify = () => {
        toast('added success')
        setFavourite(true)
    }
    const { id } = useParams();
    console.log(id)
    const reviws = useLoaderData()


    return (
        <div className='grid md:grid-cols-2 md:ml-4 mr-2 mt-4 gap-2'>
            <div className='border border-red-400 p-4 bg-slate-300'>
                <div>
                    <h1>Name:{reviws.chefName}</h1>
                    <p>Description:{reviws.chefBio}</p>
                    <p>RecipeName:{reviws.recipeName}</p>
                </div>
                <div className='flex gap-2'>
                    <p>Likes:{reviws.likes}</p>
                    <p>Experience:{reviws.yearsOfExperience}</p>
                    <p>Rating:{reviws.rating}</p><FaRegStar className='text-red-500 mt-1'></FaRegStar>

                </div>

                <div>
                    <li>{reviws.ingredients[0]}</li>
                    <li>{reviws.ingredients[1]}</li>
                    <li>{reviws.ingredients[2]}</li>
                    <li>{reviws.ingredients[3]}</li>
                    <li>{reviws.ingredients[4]}</li>
                    <p>{reviws.cookingMethod}</p>
                    <button onClick={notify} disabled={favourite} className='btn btn-secondary'>Favourite</button>
                    <Toaster />
                </div>
            </div>
            <div>
                <img className='w-full' src={reviws.chefPicture} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Review;