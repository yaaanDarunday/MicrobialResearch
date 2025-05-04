// Main Popup Elements
const healthBtn = document.getElementById("health-btn");
const environmentBtn = document.getElementById("environment-btn");
const foodBtn = document.getElementById("food-btn");
const biotechnologyBtn = document.getElementById("biotechnology-btn");

const healthInfo = document.getElementById("health-info");
const environmentInfo = document.getElementById("environment-info");
const foodInfo = document.getElementById("food-info");
const biotechnologyInfo = document.getElementById("biotechnology-info");

const popups = [healthInfo, environmentInfo, foodInfo, biotechnologyInfo];
const closeBtns = document.querySelectorAll(".close-btn");
const overlay = document.getElementById("overlay");

// Show Main Popup (Health, Environment, Food, Biotechnology)
function showMainPopup(popup) {
    popups.forEach(p => p.classList.remove("show"));
    popup.classList.add("show");
    overlay.classList.add("show");
    document.body.classList.add("no-scroll");
}

// Close All Main Popups
function closeMainPopup() {
    popups.forEach(p => p.classList.remove("show"));
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
}

// Assigning onClick Events for Main Popup Buttons
healthBtn.onclick = () => showMainPopup(healthInfo);
environmentBtn.onclick = () => showMainPopup(environmentInfo);
foodBtn.onclick = () => showMainPopup(foodInfo);
biotechnologyBtn.onclick = () => showMainPopup(biotechnologyInfo);

// Add event listeners for all close buttons
closeBtns.forEach(btn => {
    btn.onclick = closeMainPopup;
});

// Close Popups when Clicking on the Overlay
overlay.onclick = () => {
    closeMainPopup();
    closeAllImagePopups();  // Close Image Popups if Opened
};

// --- Image Popup Elements ---

// Select Image Elements
const image1 = document.querySelector(".image1 img");
const image2 = document.querySelector(".image2 img");
const image3 = document.querySelector(".image3 img");

// Image Popups
const imgPopup1 = document.getElementById("img-popup1");
const imgPopup2 = document.getElementById("img-popup2");
const imgPopup3 = document.getElementById("img-popup3");

// Array of All Image Popups
const allImagePopups = [imgPopup1, imgPopup2, imgPopup3];

// Show Image Popup Function
function showImagePopup(popup) {
    allImagePopups.forEach(p => p.classList.remove("show"));
    popup.classList.add("show");
    overlay.classList.add("show");
    document.body.classList.add("no-scroll");
}

// Close All Image Popups
function closeAllImagePopups() {
    allImagePopups.forEach(p => p.classList.remove("show"));
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
}

// Assigning onClick Events for Image Elements
image1.onclick = () => showImagePopup(imgPopup1);
image2.onclick = () => showImagePopup(imgPopup2);
image3.onclick = () => showImagePopup(imgPopup3);

// Close All Image Popups when Clicking Close Button on Image Popup
document.querySelectorAll(".img-popup .close-btn").forEach(btn => {
    btn.onclick = closeAllImagePopups;
});

// Close Image Popups when Clicking on the Overlay
overlay.onclick = () => {
    closeMainPopup();
    closeAllImagePopups();
};
