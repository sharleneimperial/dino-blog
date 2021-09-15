import React from 'react';


function Dino(props) {
    console.log(props.title);
    return (
        <div>
            <h1>{props.title}</h1>
            <p>by {props.author}</p>
            <p>{props.body}</p>
            <h3>Comments:</h3>
            <p>{props.comments[0]}</p>
        </div>
    );
}

export default Dino;