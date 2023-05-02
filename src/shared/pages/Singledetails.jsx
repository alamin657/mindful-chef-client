import React from 'react';
const Singledetails = ({ details }) => {
    const { name, picture, experience, recipes, likes } = details
    return (
        <div >
            <div className=" card w-96 bg-base-100">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Experience:{experience}</p>
                    <div className='flex gap-1'>
                        <p>Recipes:{recipes}</p>
                        <p>Likes:{likes} </p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singledetails;