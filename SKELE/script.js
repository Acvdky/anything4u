const messages = [
    document.getElementById('message1'),
    document.getElementById('message2'),
    document.getElementById('message3'),
    document.getElementById('message4')
];
const finalMessage = document.getElementById('finalMessage');
let clickCount = 0;

document.body.addEventListener('click', (e) => {
    // Generate fireworks particles
    generateFirework(e.clientX, e.clientY);

    // Handle the messages
    if (clickCount < messages.length) {
        messages[clickCount].style.display = 'block';
    }
    clickCount++;

    // If all messages have been shown, show the final message
    if (clickCount > messages.length) {
        finalMessage.style.display = 'block';
    }
});

function generateFirework(x, y) {
    const particleCount = 30; // Number of particles per firework
    const pastelColors = ['#FFD1DC', '#FFB7C5', '#A1C4FD', '#C1FFD7', '#F9F9C5']; // Soft pastel colors

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random angle and velocity for particles
        const angle = Math.random() * Math.PI * 2; // Random direction
        const velocity = Math.random() * 150 + 50; // Random speed

        const xOffset = Math.cos(angle) * velocity; // X offset
        const yOffset = Math.sin(angle) * velocity; // Y offset

        // Random pastel color
        const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        particle.style.setProperty('--x', `${xOffset}px`);
        particle.style.setProperty('--y', `${yOffset}px`);
        particle.style.setProperty('--color', randomColor);
        particle.style.backgroundColor = randomColor;

        // Position particle at click location
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Add particle to body
        document.body.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}