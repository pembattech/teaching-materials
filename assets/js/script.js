function showAlert() {
    alert("HTML defines structure, CSS adds style, JavaScript adds behavior. You've got this!");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("hidden");

}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

// Attach click event to ALL images
document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Close when clicking outside image
modal.addEventListener("click", function () {
    modal.style.display = "none";
});


// Smooth Scroll Logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
