// Prices
const weekly = {
  basic: { old: "", new: "Ksh 200 / week", discount: "" },
  standard: { old: "Ksh 600", new: "Ksh 500 / week", discount: "Bundle Save" },
  premium: { old: "Ksh 1,400", new: "Ksh 900 / week", discount: "35% OFF" }
};

const monthly = {
  basic: { old: "", new: "Ksh 800 / month", discount: "" },
  standard: { old: "Ksh 2,400", new: "Ksh 1,800 / month", discount: "25% OFF" },
  premium: { old: "Ksh 5,600", new: "Ksh 3,000 / month", discount: "45% OFF" }
};

const semester = {
  basic: { old: "", new: "Ksh 2,250 / semester", discount: "" },
  standard: { old: "Ksh 6,750", new: "Ksh 5,000 / semester", discount: "30% OFF" },
  premium: { old: "Ksh 15,750", new: "Ksh 9,000 / semester", discount: "40% OFF" }
};

let mode = "weekly"; // default

function setMode(selected) {
  mode = selected;

  document.querySelectorAll(".toggle button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.toggle button[onclick="setMode('${selected}')"]`).classList.add("active");

  updatePrice("basic", window[mode].basic);
  updatePrice("standard", window[mode].standard);
  updatePrice("premium", window[mode].premium);
}

function updatePrice(plan, data) {
  const priceDiv = document.getElementById(`price-${plan}`);
  priceDiv.innerHTML = `
    ${data.old ? `<span class="old">${data.old}</span>` : ""}
    <span class="new">${data.new}</span>
    ${data.discount ? `<span class="discount">${data.discount}</span>` : ""}
  `;
}

function sendWhatsApp(plan) {
  let phone = "254741769051"; // replace with your WhatsApp number
  let data = window[mode][plan.toLowerCase()];
  let price = data.new;

  let message = `Hello, I am interested in the ${plan} Plan (${mode.toUpperCase()}) at ${price}. Please guide me on how to proceed.`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Initialize default prices
setMode("weekly");
