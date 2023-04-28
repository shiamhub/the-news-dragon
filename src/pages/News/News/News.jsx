import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsidhts from '../EditorsInsidhts/EditorsInsidhts';

const News = () => {
    const news = useLoaderData();
    // console.log(news);
    const obj = {a:2, b:3};
    const { title, details, image_url, thumbnail_url, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary"><FaArrowLeft></FaArrowLeft> Go somewhere</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsidhts obj={obj}></EditorsInsidhts>
        </div>
    );
};

export default News;