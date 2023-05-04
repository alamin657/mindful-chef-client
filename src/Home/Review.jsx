import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SignleReview from './Home/SignleReview';

const Review = () => {
    const { id } = useParams();
    console.log(id)
    const reviws = useLoaderData()
    console.log(reviws)


    return (
        <div>
            <h1>{reviws.chefName}</h1>
        </div>
    );
};

export default Review;