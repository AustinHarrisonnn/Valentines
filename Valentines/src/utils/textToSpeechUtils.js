import { ElevenLabsClient } from 'elevenlabs';

const client = new ElevenLabsClient({
    apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY,
});

export const generateSpeech = async (text, voiceId = "nPczCjzI2devNBz1zQrb") => {
    try {
        const audioStream = await client.textToSpeech.convertAsStream(voiceId, {
            text,
            model_id: "eleven_multilingual_v2",
        });

        const audioChunks = [];
        for await (const chunk of audioStream) {
            audioChunks.push(chunk);
        }
        const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    } catch (error) {
        console.error("Error generating audio.", error);
        throw error;
    }
};