import React from 'react';
import { generateSpeech } from '../utils/textToSpeechUtils';

const Card = (props) => {

    const handleYesClicked = async () => {
        try {
            await generateSpeech("Hi!");
        } catch {
            alert("Could not generate this audio");
        }
    };

    return (
        <div className="card">
            <div className="head">
                <img src={props.image} alt="#" className="card-image" />
            </div>
            <div className="body">
                <h2>Will ju be my valentine?</h2>
                <button type="button" className="button1" onClick={handleYesClicked}>Yes</button>
                <button type="button" className="button2">No</button>
            </div>
        </div>
    );
};

export default Card;