document.addEventListener('DOMContentLoaded', () => {


// Falling lines animation setup
const fallingContainer = document.getElementById('falling-container');
const totalLines = 60;

for (let i = 0; i < totalLines; i++) {
  const line = document.createElement('div');
  line.classList.add('falling-line');

  // Random horizontal position
  line.style.left = Math.random() * 100 + 'vw';

  // Random animation duration between 3s and 7s
  line.style.animationDuration = (3 + Math.random() * 4) + 's';

  // Random animation delay to stagger lines
  line.style.animationDelay = (Math.random() * 3) + 's';

  fallingContainer.appendChild(line);
}
});