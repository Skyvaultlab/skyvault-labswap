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
