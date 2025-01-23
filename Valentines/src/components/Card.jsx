import React from 'react';
import { generateSpeech } from '../utils/textToSpeechUtils';

const Card = (props) => {

    const handleYesClicked = async () => {
        try {
            await generateSpeech("Yippie, yay, wowza, yippers!");
        } catch {
            alert("Could not generate this audio");
        }
    };

    const handleNoClicked = async () => {
        try {
            await generateSpeech("Boooo! You pressed the wrong button.");
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
                <h2>Will ju be my valentine?!?</h2>
                <div className="button-container">
                    <button type="button" className="button1" onClick={handleYesClicked}>Yes</button>
                    <button type="button" className="button2" onClick={handleNoClicked}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Card;