// List of games and their localStorage keys
const games = ['minecraft', 'krunker', '1v1lol', 'bloxd', 'bonk'];

// Initialize the counters in localStorage if not already set
games.forEach(game => {
  if (!localStorage.getItem(game)) {
    localStorage.setItem(game, 0);
  }
});

// Update the displayed counters on page load
games.forEach(game => {
  document.getElementById(`${game}-counter`).innerText = localStorage.getItem(game);
});

// Function to increment the game counter
function incrementCounter(game) {
  let currentCount = parseInt(localStorage.getItem(game));
  localStorage.setItem(game, currentCount + 1);
  document.getElementById(`${game}-counter`).innerText = localStorage.getItem(game);
}
