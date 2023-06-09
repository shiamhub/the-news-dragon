import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsidhts from '../../News/EditorsInsidhts/EditorsInsidhts';
import useTitle from '../../../hooks/useTitle';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useTitle('home')
    useEffect( () => {
        fetch('https://the-news-dragon-server-shiamhub.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    const obj = {a:2, b:1};

    return (
        <div>
            <h4>All Categories</h4>
            <div>
            {
                categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link></p>)
            }
            </div>
            <EditorsInsidhts obj={obj}></EditorsInsidhts>
        </div>
    );
};

export default LeftNav;