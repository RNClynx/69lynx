document.addEventListener('DOMContentLoaded', () => {

// Emoji + jiggle hover effect on #silly-text
const sillyText = document.getElementById('silly-text');

sillyText.addEventListener('mouseenter', (e) => {
  // Create emoji element
  const emoji = document.createElement('div');
  emoji.textContent = '😂';
  emoji.classList.add('emoji');

  // Position emoji near cursor
  emoji.style.left = e.clientX + 'px';
  emoji.style.top = e.clientY + 'px';

  document.body.appendChild(emoji);

  // Remove emoji after animation ends
  emoji.addEventListener('animationend', () => {
    emoji.remove();
  });
});

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