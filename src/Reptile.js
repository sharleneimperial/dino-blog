import React from 'react';


function Reptile(props) {
    return (
        <div className="reptile">
            <h3> {props.title[1]}</h3>
            <h3>Check out this list of Reptiles!</h3>
            <h3>Comments:</h3>
            <h3> {props.comments[3][4]}</h3>


            
        </div>
    );
}

export default Reptile;