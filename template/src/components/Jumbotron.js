import React from 'react';

const Jumbotron = (props) =>{ 
    return <h1 className="bg-dark p-4 text-white text-center">
        {`Welcome `}{props.title? `to ${props.title} App` : ''}!
    </h1>
}

export default Jumbotron;