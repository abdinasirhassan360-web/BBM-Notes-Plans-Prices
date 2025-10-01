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

  // Update active button
  document.querySelectorAll(".toggle button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.toggle button[onclick="setMode('${selected}')"]`).classList.add("active");

  // Update prices for all plans
  updatePrice("basic", weekly.basic, monthly.basic, semester.basic);
  updatePrice("standard", weekly.standard, monthly.standard, semester.standard);
  updatePrice("premium", weekly.premium, monthly.premium, semester.premium);
}

function updatePrice(plan, weeklyData, monthlyData, semesterData) {
  const priceDiv = document.getElementById(`price-${plan}`);
  const data = mode === "weekly" ? weeklyData : mode === "monthly" ? monthlyData : semesterData;
  priceDiv.innerHTML = `
    ${data.old ? `<span class="old">${data.old}</span>` : ""}
    <span class="new">${data.new}</span>
    ${data.discount ? `<span class="discount">${data.discount}</span>` : ""}
  `;
}

function sendWhatsApp(plan) {
  const phone = "254741769051"; // Replace with your WhatsApp number
  const data = mode === "weekly" ? weekly[plan.toLowerCase()] : 
               mode === "monthly" ? monthly[plan.toLowerCase()] : 
               semester[plan.toLowerCase()];
  const price = data.new;

  const message = `Hello, I am interested in the ${plan} Plan (${mode.toUpperCase()}) at ${price}. Please guide me on how to proceed.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Initialize default prices
setMode("weekly");