// Basic functionality for the swap interface
document.addEventListener('DOMContentLoaded', function() {
  // Wallet connection
  const connectWalletBtn = document.querySelector('.connect-wallet');
  connectWalletBtn.addEventListener('click', function() {
    alert('Wallet connection functionality would be implemented here');
    this.textContent = '0x7f...3a4b'; // Simulate connected wallet
  });

  // Swap functionality
  const fromAmount = document.getElementById('from-amount');
  const toAmount = document.getElementById('to-amount');
  const livePrice = document.getElementById('live-price');

  fromAmount.addEventListener('input', function() {
    if (this.value) {
      const amount = parseFloat(this.value);
      toAmount.value = (amount * 0.025).toFixed(6); // Simple conversion
    } else {
      toAmount.value = '';
    }
  });

  // Settings button
  const settingsBtn = document.querySelector('.settings-btn');
  settingsBtn.addEventListener('click', function() {
    alert('Settings modal would appear here');
  });
});
