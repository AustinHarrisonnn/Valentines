import React, { useEffect } from 'react';

const HeartRain = () => {
    useEffect(() => {
        const generateHeart = () => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️'

            const xPosition = (Math.random() * 100) + "vw";
            heart.style.setProperty('--x', `${xPosition}`);

            const animationDelay = Math.random() * 2;
            heart.style.animationDelay = `${animationDelay}s`;

            document.body.appendChild(heart);

            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        };

        const interval = setInterval(generateHeart, 240);

        return () => clearInterval(interval);
    }, []);

    return null;
};

export default HeartRain;