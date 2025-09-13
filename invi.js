// ====== Party Invitation JavaScript ======

// Function to create balloons
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Random position and color
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.backgroundColor = randomColor();

    document.body.appendChild(balloon);

    // Remove balloon after animation
    setTimeout(() => {
        balloon.remove();
    }, 6000);
}

// Function for random colors
function randomColor() {
    const colors = ["#ff4757", "#1e90ff", "#2ed573", "#ffa502", "#ff6b81", "#70a1ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Create balloons every 500ms
setInterval(createBalloon, 500);