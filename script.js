// Pricing data
const prices = {
  weekly: {
    basic: 200,
    standard: 350,
    premium: 500
  },
  monthly: {
    basic: 800,
    standard: 1400,
    premium: 2000
  },
  semester: {
    basic: 2250,
    standard: 4000,
    premium: 6000
  }
};

let mode = "weekly"; // default

// Update displayed prices
function updatePrices() {
  document.getElementById("basic-price").innerText = `Ksh ${prices[mode].basic}`;
  document.getElementById("standard-price").innerText = `Ksh ${prices[mode].standard}`;
  document.getElementById("premium-price").innerText = `Ksh ${prices[mode].premium}`;
}
function updatePrices() {
  const plans = ["basic", "standard", "premium"];
  plans.forEach(plan => {
    let price = prices[mode][plan];
    let oldPriceElem = document.getElementById(`${plan}-old`);
    let newPriceElem = document.getElementById(`${plan}-price`);
    let badgeElem = document.getElementById(`${plan}-badge`);

    if (mode === "semester") {
      let original = price * 2; // show double as crossed-out price
      oldPriceElem.innerText = `Ksh ${original}`;
      newPriceElem.innerText = `Ksh ${price}`;
      badgeElem.style.display = "inline-block";
      badgeElem.innerText = "50% OFF";
    } else {
      oldPriceElem.innerText = "";
      newPriceElem.innerText = `Ksh ${price}`;
      badgeElem.style.display = "none";
    }
  });
}

// Change payment mode
function setMode(selectedMode) {
  mode = selectedMode;
  updatePrices();
}

// Send WhatsApp message
function sendWhatsApp(plan) {
  const phone = "254741769051"; // your WhatsApp number
  const price = prices[mode][plan.toLowerCase()];
  const message = `Hello, I am interested in the *${plan} Plan* (${mode}) priced at Ksh ${price}.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Initialize on load
window.onload = updatePrices;
