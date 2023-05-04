import React from 'react';
import { FaCheck } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const Singledetails = ({ details }) => {
    // console.log(details)
    const { id, chefName, chefPicture, yearsOfExperience, numOfRecipes, likes } = details;
    // console.log(id);
    return (
        <div>
            <div className=" card w-96 bg-base-100">
                <figure className="px-10 pt-10">
                    <LazyLoad offset={600}>
                        <img src={chefPicture} alt="Shoes" className="rounded-xl" />
                    </LazyLoad>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title underline">{chefName}</h2>
                    <p>Experience:{yearsOfExperience}</p>
                    <div className='flex gap-1'>
                        <p>Recipes:{numOfRecipes}</p>
                        <p className='flex gap-1'>Likes:{likes}<FaCheck className='mt-1'></FaCheck></p>
                    </div>
                    <div>
                        <Link to={`/details/${id}`}><button className='btn btn-primary'>Review Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Singledetails;