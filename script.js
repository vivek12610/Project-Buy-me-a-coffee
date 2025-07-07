// Get toggle switch and label
const toggle = document.getElementById('mode-toggle');
const label = document.getElementById('mode-label');

// Listen for toggle switch changes
toggle.addEventListener('change', () => {
  // Toggle the "dark" class on body
  document.body.classList.toggle('dark');

  // Update the label icon and text
  if (document.body.classList.contains('dark')) {
    label.textContent = '☀️ Light Mode';
  } else {
    label.textContent = '🌙 Dark Mode';
  }
});
