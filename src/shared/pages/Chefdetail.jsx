import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Singledetails from './Singledetails';

const Chefdetail = () => {
    const [chefdetails, setChefdetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefdetails')
            .then(res => res.json())
            .then(data => setChefdetails(data))
    }, [])
    return (
        <div>
            <h4>this is chefdetails</h4>
            <div className='grid grid-cols-3 gap-1'>
                {
                    chefdetails.map(details => <Singledetails
                        key={details.id}
                        details={details}></Singledetails>)
                }
            </div>
        </div>
    );
};

export default Chefdetail;