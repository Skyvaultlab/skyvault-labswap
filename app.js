// Live Price Ticker Animation
function animateTicker() {
  const ticker = document.querySelector('.ticker-content');
  ticker.style.animation = 'scroll 30s linear infinite';
}

// Initialize
animateTicker();
// Ensure this runs after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  const ticker = document.querySelector('.ticker-content');
  ticker.style.animation = 'scroll 30s linear infinite';
});
// 3D Particle Background Initialization
const particleConfig = {
  density: 100,
  color: 0xFFD700,
  speed: 0.5
};

// Quantum Swap Animation
function animateSwap() {
  const swapBtn = document.querySelector('.quantum-swap-btn');
  swapBtn.addEventListener('click', () => {
    // Holographic swap sequence
    console.log("Quantum swap initiated!");
  });
}

// Crypto Price Ticker with WebSocket
const cryptoWS = new WebSocket('wss://stream.cryptocompare.com/v2');
cryptoWS.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // Update prices in real-time
};
