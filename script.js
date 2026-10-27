// Premium Interactive Billing Toggle Architecture
const toggleSwitch = document.getElementById('billingToggle');

// Define synchronized localized corporate pricing matrix
const priceMatrix = {
    monthly: { basic: "2,000", standard: "4,000", premium: "6,500", suffix: "/mo" },
    annually: { basic: "20,000", standard: "40,000", premium: "65,000", suffix: "/yr" }
};

// Target price numeric elements on the DOM
const basicAmt = document.getElementById('basicPrice');
const standardAmt = document.getElementById('standardPrice');
const premiumAmt = document.getElementById('premiumPrice');

// Target chronological text period labels on the DOM
const basicSfx = document.getElementById('basicPeriod');
const standardSfx = document.getElementById('standardPeriod');
const premiumSfx = document.getElementById('premiumPeriod');

// Track and listen to interface switch adjustment events
toggleSwitch.addEventListener('change', function () {
    const elements = [basicAmt, standardAmt, premiumAmt];

    // Step 1: Add a quick visual fading feel before data shifting
    elements.forEach(el => el.style.opacity = 0.3);

    // Step 2: Execute parameters swap logic smoothly after 150ms delay
    setTimeout(() => {
        if (this.checked) {
            // Apply Annualized Matrix Strategy configurations
            basicAmt.textContent = priceMatrix.annually.basic;
            standardAmt.textContent = priceMatrix.annually.standard;
            premiumAmt.textContent = priceMatrix.annually.premium;

            basicSfx.textContent = priceMatrix.annually.suffix;
            standardSfx.textContent = priceMatrix.annually.suffix;
            premiumSfx.textContent = priceMatrix.annually.suffix;
        } else {
            // Revert back to Standard Monthly Matrix configurations
            basicAmt.textContent = priceMatrix.monthly.basic;
            standardAmt.textContent = priceMatrix.monthly.standard;
            premiumAmt.textContent = priceMatrix.monthly.premium;

            basicSfx.textContent = priceMatrix.monthly.suffix;
            standardSfx.textContent = priceMatrix.monthly.suffix;
            premiumSfx.textContent = priceMatrix.monthly.suffix;
        }

        // Step 3: Re-establish complete contrast opacity visibility
        elements.forEach(el => el.style.opacity = 1);
    }, 150);
});
