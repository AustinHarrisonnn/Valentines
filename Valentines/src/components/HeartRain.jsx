import React, { useEffect } from 'react';

const HeartRain = () => {
    useEffect(() => {
        const generateHeart = () => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️'

            // sets random position on the x-axis for hearts to fall from
            const xPosition = (Math.random() * 100) + "vw";
            heart.style.setProperty('--x', `${xPosition}`);

            // animation delay to allow hearts to fall at differnet times
            const animationDelay = Math.random() * 2;
            heart.style.animationDelay = `${animationDelay}s`;

            // appends the heart to the body
            document.body.appendChild(heart);

            // removes heart animation after completion
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        };

        // generates hearts every 100ms
        const interval = setInterval(generateHeart, 290);

        return () => clearInterval(interval);
    }, []);

    return null;
};

export default HeartRain;