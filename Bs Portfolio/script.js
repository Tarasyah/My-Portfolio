document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const observerOptions = { threshold: 0.2 };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        // Delay content animation for cascading effect
        const contents = entry.target.querySelectorAll(".content");
        contents.forEach((content, index) => {
          setTimeout(() => content.classList.add("active"), index * 150);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Scroll-to-Top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.textContent = "↑";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
