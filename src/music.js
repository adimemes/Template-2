// Get all required elements
const musicIcon = document.getElementById("music-icon");
const musicContainer = document.querySelector(".fixed.bottom-4.right-4"); // Music container
const musicSvgOn = document.getElementById("music-on");
const musicSvgOff = document.getElementById("music-off");
const audio = document.getElementById("background-music");
const openBtn = document.getElementById("openBtn");

// Initial setup
audio.pause();
musicSvgOn.classList.add("hidden");
musicSvgOff.classList.remove("hidden");
musicContainer.classList.add("hidden"); // Hide music container initially
document.body.classList.add("overflow-hidden");

// Toggle music on/off
musicIcon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicSvgOn.classList.remove("hidden");
    musicSvgOff.classList.add("hidden");
  } else {
    audio.pause();
    musicSvgOn.classList.add("hidden");
    musicSvgOff.classList.remove("hidden");
  }
});

// Handle invitation open button
openBtn.addEventListener("click", () => {
  // Remove overflow hidden
  document.body.classList.remove("overflow-hidden");
  
  // Show music container with fade animation
  musicContainer.classList.remove("hidden");
  musicContainer.style.opacity = "0";
  setTimeout(() => {
    musicContainer.style.transition = "opacity 0.5s ease-in";
    musicContainer.style.opacity = "1";
  }, 100);

  // Play music and update icons
  if (audio.paused) {
    audio.play().catch(err => {
      console.log("Autoplay prevented:", err);
      // If autoplay is prevented, still show the music icon
      musicSvgOn.classList.add("hidden");
      musicSvgOff.classList.remove("hidden");
    });
    musicSvgOn.classList.remove("hidden");
    musicSvgOff.classList.add("hidden");
  }

  // Scroll to next section
  const nextSection = document.getElementById("nextSection");
  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  }
});

// Add styles for fade animation
const style = document.createElement("style");
style.textContent = `
  .fixed.bottom-4.right-4 {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
  
  .hidden {
    display: none !important;
  }
`;
document.head.appendChild(style);

// Optional: Handle page refresh to reset music state
window.addEventListener("beforeunload", () => {
  audio.pause();
  musicSvgOn.classList.add("hidden");
  musicSvgOff.classList.remove("hidden");
});


// scrol refres

// Pastikan posisi scroll selalu di atas saat refresh
window.addEventListener("load", () => {
  // Deteksi jika halaman di-refresh
  if (performance.navigation.type === 1) {
    // Arahkan kembali ke halaman awal
    window.location.href = window.location.pathname;
  }

  // Tetap scroll ke atas
  window.scrollTo(0, 0);
});