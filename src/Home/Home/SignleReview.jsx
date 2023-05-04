import React from 'react';

const SignleReview = ({ review }) => {
    const { chefName, chefPicture, yearsOfExperienc, numOfRecipes, likes } = review;
    return (
        <div>
            <p>{chefName}</p>
        </div>
    );
};

export default SignleReview;