import { ElevenLabsClient } from 'elevenlabs';

// initialized elevenlabs client
const client = new ElevenLabsClient({
    apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY,
});

// function to generate speech from text and voiceid
export const generateSpeech = async (text, voiceId = "nPczCjzI2devNBz1zQrb") => {
    try {
        // calls the eleven labs api to convert the text to speech
        const audioStream = await client.textToSpeech.convertAsStream(voiceId, {
            text,
            model_id: "eleven_multilingual_v2", // the model im using for speech generation
        });

        // collects audio chunks from the response stream of the API
        const audioChunks = [];
        for await (const chunk of audioStream) {
            audioChunks.push(chunk); // pushes each chunk of audio data into the array
        }
        // combine the audio chunks into a single Blob (binary large object)
        const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });

        // creates a URL for the audio Blob, which can be used to play the audio
        const audioUrl = URL.createObjectURL(audioBlob);

        // create an Audio object and lastly play the generated speech
        const audio = new Audio(audioUrl);
        audio.play();
    } catch (error) {
        console.error("Error generating audio.", error);
        throw error;
    }
};