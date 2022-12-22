import React from 'react';
import {Link} from 'react-router-dom'

function Thanks(props) {
    return (
        <>
        <body>
    <header>
        <h1>Dino's pizzeria</h1>

    </header>

    <div class="menu delivery thanks">
        <hr />
        <h2>Thank you for your order</h2>
        <hr />
    </div>
    <div class="thanks-text">
        <h6>Thank you for your ordering. We received your request.</h6>
        <h6>Our staff will be contacting with you to tell next steps.</h6>
        <Link to =  "/">
        <button class="home-btn">Back to Home page</button>
        </Link>
    </div>  

</body>
            
        </>
    );
}

export default Thanks;