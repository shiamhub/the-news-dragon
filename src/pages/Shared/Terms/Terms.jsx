import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto, amet vitae dolore ipsum aut cumque dolores molestiae asperiores cum, fugiat aliquid quam corrupti maiores dicta nulla nostrum ea mollitia!</p>
            <p>Go back to<Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;