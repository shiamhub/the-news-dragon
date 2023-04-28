import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardNews from '../CardNews/CardNews';

const Category = () => {
    const categoryNews = useLoaderData();

    const {id} = useParams();

    return (
        <div>
            {id && <h2>This Category News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <CardNews key={news._id} news={news}></CardNews>)
            }
        </div>
    );
};

export default Category;