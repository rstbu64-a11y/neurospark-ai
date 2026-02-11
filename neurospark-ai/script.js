// Fake AI content loading
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");
result.style.display = "none";

setTimeout(() => {
  loading.style.display = "none";
  result.style.display = "block";
}, 2000);

// Scroll animation
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.opacity = 0;
  fader.style.transform = "translateY(40px)";
  fader.style.transition = "all 0.8s ease";
  appearOnScroll.observe(fader);
});
