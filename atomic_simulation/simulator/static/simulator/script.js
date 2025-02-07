const canvas = document.getElementById("atomCanvas");
const ctx = canvas.getContext("2d");

// Increase Canvas Size
canvas.width = 250;
canvas.height = 250;

let protons = 2;
let neutrons = 2;
let electrons = 2;

async function fetchElementData() {
    try {
        const response = await fetch(`/api/element/${protons}/${neutrons}/${electrons}/`);
        const data = await response.json();
        updateElementName(data);
    } catch (error) {
        console.error("Error fetching element data:", error);
    }
    drawAtom();  // Always redraw after fetching data
}

function updateProtons(change) {
    protons = Math.max(1, protons + change);
    document.getElementById("proton-count").innerText = protons;
    fetchElementData();
}

function updateNeutrons(change) {
    neutrons = Math.max(0, neutrons + change);
    document.getElementById("neutron-count").innerText = neutrons;
    fetchElementData();
}

function updateElectrons(change) {
    electrons = Math.max(1, electrons + change);
    document.getElementById("electron-count").innerText = electrons;
    fetchElementData();
}

async function updateElementName(data) {
    let elementName = "No atom found";
    let charge = "";
    let isotope = "";

    if (data.element) {
        elementName = data.element;
        isotope = data.isotope;
        let chargeValue = protons - electrons;
        charge = (chargeValue !== 0) ? ` Ion (${chargeValue > 0 ? '+' : ''}${chargeValue})` : "Neutral";
    }

    document.getElementById("element-name").innerText = `${isotope ? isotope : elementName} ${charge}`;
}

function drawAtom() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw nucleus
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    // Draw protons
    for (let i = 0; i < protons; i++) {
        let angle = (Math.PI * 2 * i) / Math.max(1, protons);
        let x = canvas.width / 2 + Math.cos(angle) * 15;
        let y = canvas.height / 2 + Math.sin(angle) * 15;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    // Draw neutrons
    for (let i = 0; i < neutrons; i++) {
        let angle = (Math.PI * 2 * i) / Math.max(1, neutrons);
        let x = canvas.width / 2 + Math.cos(angle) * 20;
        let y = canvas.height / 2 + Math.sin(angle) * 20;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "gray";
        ctx.fill();
    }

    // Draw electrons
    let maxElectronsPerShell = [2, 8, 18, 32];
    let electronIndex = 0;
    console.log("Drawing electrons:", electrons);  // Debugging log

    for (let shell = 0; electronIndex < electrons; shell++) {
        let orbitRadiusX = 40 + shell * 20; // Reduced size
        let orbitRadiusY = orbitRadiusX * 0.6;
        let electronsInShell = Math.min(electrons - electronIndex, maxElectronsPerShell[shell] || 32);

        for (let i = 0; i < electronsInShell; i++, electronIndex++) {
            let angle = (Math.PI * 2 * i) / electronsInShell;
            let x = canvas.width / 2 + Math.cos(angle) * orbitRadiusX;
            let y = canvas.height / 2 + Math.sin(angle) * orbitRadiusY;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = "yellow";
            ctx.fill();
        }
    }
}

// Initial fetch
window.onload = function() {
    fetchElementData();
};
