import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardNews from '../CardNews/CardNews';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    const categoryNews = useLoaderData();
    // useTitle('category')
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