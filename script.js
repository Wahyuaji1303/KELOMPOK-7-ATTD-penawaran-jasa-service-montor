// Scroll halus ke bagian tertentu
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Efek animasi bergantian saat scroll
const fadeElements = document.querySelectorAll(".fade-in, .fade-up");
window.addEventListener("scroll", () => {
  fadeElements.forEach((el, index) => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 200); // animasi muncul bergantian
    }
  });
});
