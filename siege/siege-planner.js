document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('siege-planner-app');

  // Clear existing content (optional)
  app.innerHTML = '';

  // Create a simple button
  const button = document.createElement('button');
  button.textContent = 'Click to show tip';

  // Create a paragraph for showing a tip
  const tip = document.createElement('p');
  tip.style.marginTop = '15px';
  tip.style.color = '#ff69b4'; // pink color

  // Add button click handler
  button.addEventListener('click', () => {
    tip.textContent = 'Remember: Position your units for maximum coverage!';
  });

  // Add elements to the app container
  app.appendChild(button);
  app.appendChild(tip);
});
// This script initializes a simple siege planner app with a button that shows a tip when clicked.
// It uses basic DOM manipulation to create and display elements dynamically.