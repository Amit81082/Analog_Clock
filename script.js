// Selecting clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Selecting clock container
const clock = document.querySelector(".clock");

// Function to update clock
function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds(); // For smooth transition

    // Calculate rotation degrees with smooth transitions
    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = (minutes * 6) + (seconds * 0.1);
    const secondDeg = (seconds * 6) + (milliseconds * 0.006); // Smooth second hand

    // Apply rotation with smooth transitions
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Update clock every 10ms for smooth effect
setInterval(updateClock, 10);
updateClock();

// Create 12 numbers dynamically
for (let i = 1; i <= 12; i++) {
    let num = document.createElement("div");
    num.className = "num";
    num.innerText = i;

    // Position calculation using trigonometry
    let angle = (i - 3) * (Math.PI / 6);  // Subtracting 3 aligns "12" at top
    let x = 50 + 40 * Math.cos(angle); // 40% radius for positioning
    let y = 50 + 40 * Math.sin(angle);

    num.style.left = `${x}%`;
    num.style.top = `${y}%`;

    clock.appendChild(num);
}

// 🎵 Add ticking sound effect
const tickSound = new Audio('https://www.soundjay.com/button/beep-07.wav');

// Function to play ticking sound every second
function playTickingSound() {
    tickSound.currentTime = 0; // Reset sound
    tickSound.play();
}

// Play sound every second
setInterval(playTickingSound, 1000);

// 📅 Display Current Date Below Clock
const dateDisplay = document.createElement("div");
dateDisplay.className = "date-display";
clock.after(dateDisplay);

function updateDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.innerText = today.toLocaleDateString('en-US', options);
}

// Update date once
updateDate();

// ✨ Add glowing effect on hover
clock.addEventListener("mouseenter", () => {
    clock.style.boxShadow = "0 0 50px rgba(255, 204, 0, 1)";
});

clock.addEventListener("mouseleave", () => {
    clock.style.boxShadow = "inset 0 0 20px rgba(255, 255, 255, 0.2)";
});
