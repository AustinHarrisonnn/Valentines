import React from 'react';
import { ElevenLabsClient } from "elevenlabs";
import { Readable } from "stream";

const client = new ElevenLabsClient({
    apiKey: "sk_00929336286cc49b5a9503e412aa9d9970e50996c4c172d6",
});

const Card = (props) => {

    const handleYesClicked = async () => {
        try {
            const audioStream = await client.textToSpeech.convertAsStream("nPczCjzI2devNBz1zQrb", {
                text: "Hi!",
                model_id: "eleven_multilingual_v2",
                
            });

            const audioChunks = [];
            for await (const chunk of audioStream) {
                audioChunks.push(chunk);
            }
            const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });

            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        } catch (error) {
            console.error('could not generate audio', error);
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