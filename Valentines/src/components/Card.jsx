import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="head">
                <img src={props.image} alt="#" className="card-image" />
            </div>
            <div className="body">
                <h2>Will ju be my valentine?</h2>
                <button type="button" className="button1">Yes</button>
                <button type="button" className="button2">No</button>
            </div>
        </div>
    );
};

export default Card;