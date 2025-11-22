// Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const menuToggleIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Swap icon
  if (navLinks.classList.contains("active")) {
    menuToggleIcon.classList.remove("fa-bars");
    menuToggleIcon.classList.add("fa-xmark"); // X icon
  } else {
    menuToggleIcon.classList.remove("fa-xmark");
    menuToggleIcon.classList.add("fa-bars");
  }
});

// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const savedDarkModeTheme = localStorage.getItem("theme");

  if (savedDarkModeTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeBtn").textContent = "";
  }
});

const darkModeBtn = document.getElementById("darkModeBtn");
const darkModeIcon = darkModeBtn.querySelector("i");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    // Switch to sun icon (light style)
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
  } else {
    // Switch back to moon icon
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
  }
});
