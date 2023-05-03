import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewRecipes = () => {
    const { id } = useParams()
    const details = useLoaderData();
    console.log(details);
    return (
        <div>

        </div>
    );
};

export default ViewRecipes;