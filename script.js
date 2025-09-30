// Function to show selected plan timeframe
function showPlans(timeframe) {
  // Hide all price spans first
  const allPrices = document.querySelectorAll('.price span');
  allPrices.forEach(span => {
    span.style.display = 'none';
  });

  // Show only the chosen timeframe
  const selectedPrices = document.querySelectorAll('.' + timeframe);
  selectedPrices.forEach(span => {
    span.style.display = 'inline-block';
  });

  // Update active button styling
  const buttons = document.querySelectorAll('.toggle button');
  buttons.forEach(btn => btn.classList.remove('active'));

  if (timeframe === 'weekly') {
    buttons[0].classList.add('active');
  } else if (timeframe === 'monthly') {
    buttons[1].classList.add('active');
  } else if (timeframe === 'semester') {
    buttons[2].classList.add('active');
  }
}

// Function when user clicks "Get this Plan"
function choosePlan(planName) {
  // WhatsApp link with pre-filled message
  const phoneNumber = "254741769051"; // <-- Replace with your WhatsApp number
  const message = `Hello, I'm interested in the ${planName} plan for notes.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Redirect to WhatsApp
  window.open(url, "_blank");
}

// By default, show Weekly prices
document.addEventListener('DOMContentLoaded', () => {
  showPlans('weekly');
});
