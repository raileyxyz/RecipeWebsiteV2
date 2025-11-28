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

  const icon = document.getElementById("darkIcon");

  if (savedDarkModeTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "light_mode"; // sun icon
  }
});

const darkModeBtn = document.getElementById("darkModeBtn");
const darkModeIcon = document.getElementById("darkIcon");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    // Switch to sun icon
    darkModeIcon.textContent = "light_mode";
    localStorage.setItem("theme", "dark");
  } else {
    // Switch back to moon icon
    darkModeIcon.textContent = "dark_mode";
    localStorage.setItem("theme", "light");
  }
});
