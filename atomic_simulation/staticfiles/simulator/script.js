let protonCount = 1;  // Set default value
let neutronCount = 1;

function updateCounts() {
    document.getElementById("protonCount").innerText = protonCount;
    document.getElementById("neutronCount").innerText = neutronCount;
}

function changeProtons(value) {
    protonCount = Math.max(1, protonCount + value); // Ensure min 1 proton
    updateCounts();
}

function changeNeutrons(value) {
    neutronCount = Math.max(0, neutronCount + value);
    updateCounts();
}

// Call updateCounts to set default values on page load
updateCounts();
const canvas = document.getElementById("atomCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

function drawAtom() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw nucleus
    let nucleusRadius = 30;
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    // Draw Protons (Red)
    for (let i = 0; i < protonCount; i++) {
        ctx.beginPath();
        ctx.arc(centerX + Math.random() * 10, centerY + Math.random() * 10, 5, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }

    // Draw Neutrons (Gray)
    for (let i = 0; i < neutronCount; i++) {
        ctx.beginPath();
        ctx.arc(centerX + Math.random() * 10, centerY + Math.random() * 10, 5, 0, Math.PI * 2);
        ctx.fillStyle = "gray";
        ctx.fill();
        ctx.closePath();
    }

    // Draw Electrons (Blue) in elliptical orbits
    let angleOffset = 0;

function drawElectrons() {
    for (let i = 0; i < protonCount; i++) {
        let angle = (i * (2 * Math.PI)) / protonCount + angleOffset;
        let x = centerX + Math.cos(angle) * 80;
        let y = centerY + Math.sin(angle) * 40;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw nucleus
    drawAtom();

    // Move electrons
    angleOffset += 0.02;
    drawElectrons();

    requestAnimationFrame(animate);
}

// Start animation
animate();

// Redraw whenever protons or neutrons change
function updateVisualization() {
    updateCounts();
    drawAtom();
}

// Update visualization initially
updateVisualization();
function checkStability() {
    let stabilityMessage = "";
    let ratio = neutronCount / protonCount;

    if (ratio >= 0.9 && ratio <= 1.1) {
        stabilityMessage = "Stable";
    } else {
        stabilityMessage = "Unstable";
    }

    document.getElementById("stabilityIndicator").innerText = stabilityMessage;
}

// Update stability when values change
function updateVisualization() {
    updateCounts();
    checkStability();
    drawAtom();
}
