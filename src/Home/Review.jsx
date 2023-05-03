import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Review = () => {
    const { id } = useParams();
    console.log(id)
    const details = useLoaderData()
    console.log(details)
    return (
        <div>
            <p>djfdlkjfd</p>
        </div>
    );
};

export default Review;