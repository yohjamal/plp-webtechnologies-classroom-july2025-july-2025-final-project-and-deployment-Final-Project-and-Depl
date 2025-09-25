// ===== Image Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// ===== Form Validation =====
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
      msg.textContent = "⚠️ Please fill out all fields.";
      msg.style.color = "red";
    } else {
      msg.textContent = "✅ Message sent successfully!";
      msg.style.color = "green";
      form.reset();
    }
  });
}
