import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Review = () => {
    const [favourite, setFavourite] = useState(false)
    // const notify = () => toast(' added success'){
    //     setFavourite()
    // }
    const notify = () => {
        toast('added success')
        setFavourite(true)
    }
    const { id } = useParams();
    console.log(id)
    const reviws = useLoaderData()
    console.log(reviws)


    return (
        <div className='grid grid-cols-2 ml-4 mt-1 gap-2'>
            <div className='border border-red-400 p-4 bg-slate-300'>
                <div>
                    <h1>Name:{reviws.chefName}</h1>
                    <p>Description:{reviws.chefBio}</p>
                    <p>RecipeName:{reviws.recipeName}</p>
                </div>
                <div className='flex gap-2'>
                    <p>Likes:{reviws.likes}</p>
                    <p>Experience:{reviws.yearsOfExperience}</p>
                    <p>Rating:{reviws.rating}</p>

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
                <img src={reviws.chefPicture} alt="" />
            </div>

        </div>
    );
};

export default Review;