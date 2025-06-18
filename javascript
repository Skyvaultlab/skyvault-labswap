// Backend integration point
async function fetchRealAPR() {
  const response = await fetch('your-backend-url/apy');
  const data = await response.json();
  document.getElementById('lp-apr').textContent = data.apr;
}
// Ensure images load correctly
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.onerror = function() {
      this.style.display = 'none';
      console.error(`Image failed to load: ${this.src}`);
    };
  });
});
// Add this to app.js to verify image loading
document.addEventListener('DOMContentLoaded', () => {
  const images = ['logo.png', 'mascot.png', 'SCG-coin.png', 'background.jpg'];
  
  images.forEach(img => {
    const imgEl = new Image();
    imgEl.src = img;
    imgEl.onerror = () => console.error(`Failed to load: ${img}`);
  });
});
const speechRecognition = new webkitSpeechRecognition();
speechRecognition.onresult = (e) => executeSwap(e.results[0][0].transcript);
