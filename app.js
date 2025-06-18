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
// Fetch SCG/WMATIC price from DEXView API
async function fetchSCGPrice() {
  try {
    const response = await fetch('https://api.dexview.com/polygon/0x3386641Aa774dB13209a76Ac91bA33425567BD35');
    const data = await response.json();
    
    // Update live price
    const price = data.lastPriceUSD.toFixed(6);
    const change24h = (data.priceChange24h * 100).toFixed(2);
    const direction = change24h >= 0 ? '▲' : '▼';
    
    document.getElementById('scg-price').textContent = 
      `SCG/WMATIC: $${price} ${direction}${Math.abs(change24h)}%`;
      
    // Auto-calculate swap amounts
    document.getElementById('from-amount').addEventListener('input', (e) => {
      const amount = parseFloat(e.target.value) || 0;
      document.getElementById('to-amount').value = (amount * price).toFixed(6);
    });
    
  } catch (error) {
    console.error("Using fallback prices");
    document.getElementById('scg-price').textContent = "SCG/WMATIC: $0.0042 ▲2.4%";
  }
}

// Initialize
fetchSCGPrice();
setInterval(fetchSCGPrice, 30000); // Update every 30 seconds
// Realtime APR Calculation (Mock)
function updateAPR() {
  // This would connect to your backend later
  const baseAPR = 420;
  const randomFluctuation = (Math.random() * 20 - 10);
  const currentAPR = (baseAPR + randomFluctuation).toFixed(2);
  
  document.getElementById('lp-apr').textContent = currentAPR;
  
  // Simulate real-time updates
  setTimeout(updateAPR, 30000);
}

// Initialize
updateAPR();

// Mobile Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Wallet Placeholder (Backend will replace this)
document.getElementById('wallet-connect').addEventListener('click', () => {
  alert("Wallet connection will be implemented with backend");
});
