document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            document.getElementById("attractions").scrollIntoView({ behavior: "smooth" });
        });
    }

    const toggleTheme = document.getElementById("toggleTheme");
    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleTheme.textContent = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
    });

    const userLoginForm = document.getElementById("userLoginForm");
    if (userLoginForm) {
        userLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            alert(`Welcome, ${username}! Your tickets are ready.`);
            userLoginForm.reset();
        });
    }
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const mapPoints = document.querySelectorAll(".map-point");
    const tooltip = document.getElementById("tooltip");

    mapPoints.forEach(point => {
        point.addEventListener("mouseenter", (event) => {
            tooltip.style.display = "block";
            tooltip.innerText = event.target.dataset.info;
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        point.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
});
