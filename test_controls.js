// Inject test into browser console to check if controls work
console.log('Testing game controls...');
console.log('Player position before:', player.x, player.y);

// Simulate key press manually
keys.right = true;
console.log('Set keys.right = true');

// Run update once
update();
console.log('Player position after update:', player.x, player.y);

// Reset keys
keys.right = false;
