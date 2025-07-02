// Debug script to check game state
console.log('Game running:', gameRunning);
console.log('Player position:', player.x, player.y);
console.log('Keys state:', keys);

// Add debugging to key events
const originalKeydown = window.onkeydown;
window.addEventListener('keydown', (e) => {
  console.log('Key pressed:', e.key);
});

// Check if game loop is running
let frameCount = 0;
const originalGameLoop = gameLoop;
window.gameLoop = function() {
  frameCount++;
  if (frameCount % 60 === 0) {
    console.log('Game loop running, frame:', frameCount);
  }
  originalGameLoop();
};
