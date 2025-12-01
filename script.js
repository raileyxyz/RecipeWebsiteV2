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

// COOKIES HTML FILE CODE
const cookiesIngredients = () => {
  const cookiesServing = document.getElementById("cookies-servings").value;

  if (cookiesServing === "" || cookiesServing <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("cookies-butter").innerHTML =
    4.5 * cookiesServing + "g";
  document.getElementById("cookies-white-sugar").innerHTML =
    8 * cookiesServing + "g";
  document.getElementById("cookies-brown-sugar").innerHTML =
    8.8 * cookiesServing + "g";
  document.getElementById("cookies-cream").innerHTML =
    10 * cookiesServing + "g";
  document.getElementById("cookies-egg").innerHTML = 4 * cookiesServing + "g";
  document.getElementById("cookies-vanilla").innerHTML =
    0.34 * cookiesServing + "g";
  document.getElementById("cookies-flour").innerHTML =
    20.4 * cookiesServing + "g";
  document.getElementById("cookies-baking-soda").innerHTML =
    0.18 * cookiesServing + "g";
  document.getElementById("cookies-salt").innerHTML =
    0.24 * cookiesServing + "g";
  document.getElementById("cookies-chocolate").innerHTML =
    22.1 * cookiesServing + "g";
};

// BROWNIES HTML FILE CODE
const browniesIngredients = () => {
  const browniesServing = document.getElementById("brownies-servings").value;

  if (browniesServing === "" || browniesServing <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("brownies-butter").innerHTML =
    15.9 * browniesServing + "g";
  document.getElementById("brownies-dark-chocolate").innerHTML =
    22.1 * browniesServing + "g";
  document.getElementById("brownies-cream").innerHTML =
    17.5 * browniesServing + "g";
  document.getElementById("brownies-white-sugar").innerHTML =
    26.0 * browniesServing + "g";
  document.getElementById("brownies-brown-sugar").innerHTML =
    15.4 * browniesServing + "g";
  document.getElementById("brownies-egg").innerHTML =
    16.5 * browniesServing + "g";
  document.getElementById("brownies-vanilla").innerHTML =
    0.55 * browniesServing + "g";
  document.getElementById("brownies-flour").innerHTML =
    12.0 * browniesServing + "g";
  document.getElementById("brownies-salt").innerHTML =
    0.42 * browniesServing + "g";
  document.getElementById("brownies-cocoa").innerHTML =
    0.65 * browniesServing + "g";
  document.getElementById("brownies-semi-sweet-chocolate").innerHTML =
    11.9 * browniesServing + "g";
};

// CHOCO MUFFINS HTML FILE CODE
const chocoMuffinsIngredients = () => {
  const chocoMuffinsServing = document.getElementById(
    "chocoMuffins-servings"
  ).value;

  if (chocoMuffinsServing === "" || chocoMuffinsServing <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("muffins-flour").innerHTML =
    17.3 * chocoMuffinsServing + "g";
  document.getElementById("muffins-baking-soda").innerHTML =
    0.4 * chocoMuffinsServing + "g";
  document.getElementById("muffins-salt").innerHTML =
    0.2 * chocoMuffinsServing + " g";
  document.getElementById("muffins-cocoa").innerHTML =
    4 * chocoMuffinsServing + "g";
  document.getElementById("muffins-coffee").innerHTML =
    0.13 * chocoMuffinsServing + "g";
  document.getElementById("muffins-milk").innerHTML =
    12.7 * chocoMuffinsServing + "g";
  document.getElementById("muffins-oil").innerHTML =
    7.7 * chocoMuffinsServing + "g";
  document.getElementById("muffins-sugar").innerHTML =
    13.3 * chocoMuffinsServing + "g";
  document.getElementById("muffins-vanilla").innerHTML =
    0.33 * chocoMuffinsServing + "g";
  document.getElementById("muffins-sour-cream").innerHTML =
    13.3 * chocoMuffinsServing + "g";
  document.getElementById("muffins-egg").innerHTML =
    3.7 * chocoMuffinsServing + "g";
  document.getElementById("muffins-choco").innerHTML =
    20 * chocoMuffinsServing + "g";
};

// CHOCO CUPCAKE HTML FILE CODE
const chocoCupcakeIngredients = () => {
  const chocoCupcakeServing = document.getElementById(
    "chocoCupcake-servings"
  ).value;

  if (chocoCupcakeServing === "" || chocoCupcakeServing <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("cupcake-flour").innerHTML =
    15 * chocoCupcakeServing + "g";
  document.getElementById("cupcake-sugar").innerHTML =
    21 * chocoCupcakeServing + "g";
  document.getElementById("cupcake-cocoa").innerHTML =
    2 * chocoCupcakeServing + "g";
  document.getElementById("cupcake-baking-soda").innerHTML =
    0.3 * chocoCupcakeServing + "g";
  document.getElementById("cupcake-salt").innerHTML =
    0.1 * chocoCupcakeServing + "g";
  document.getElementById("cupcake-buttermilk").innerHTML =
    20 * chocoCupcakeServing + "g";
  document.getElementById("cupcake-oil").innerHTML =
    6.5 * chocoCupcakeServing + "g";
  document.getElementById("cupcake-egg").innerHTML =
    5 * chocoCupcakeServing + "g";
  document.getElementById("cupcake-vanilla").innerHTML =
    0.8 * chocoCupcakeServing + "g";
};

// EGG PIE HTML FILE CODE
const eggPieIngredients = () => {
  var eggPieServing = document.getElementById("eggPie-servings").value;

  if (eggPieServing === "" || eggPieServing <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("eggpie-flour").innerHTML = 145 * eggPieServing + "g";
  document.getElementById("eggpie-salt").innerHTML = 2.41 * eggPieServing + "g";
  document.getElementById("eggpie-sugar1").innerHTML =
    20.1 * eggPieServing + "g";
  document.getElementById("eggpie-butter").innerHTML =
    91.1 * eggPieServing + "g";
  document.getElementById("eggpie-yolk").innerHTML = 13.7 * eggPieServing + "g";
  document.getElementById("eggpie-vanilla1").innerHTML =
    2.41 * eggPieServing + "g";
  document.getElementById("eggpie-water").innerHTML =
    35.4 * eggPieServing + "g";
  document.getElementById("eggpie-milk").innerHTML = 297 * eggPieServing + "g";
  document.getElementById("eggpie-whole-egg").innerHTML =
    201 * eggPieServing + "g";
  document.getElementById("eggpie-sugar2").innerHTML =
    161 * eggPieServing + "g";
  document.getElementById("eggpie-vanilla2").innerHTML =
    8.8 * eggPieServing + "g";
  document.getElementById("eggpie-white").innerHTML =
    24.1 * eggPieServing + "g";
};

// GLAZED DOUGHNUT HTML FILE CODE
const glazedDoughnutIngredients = () => {
  const glazedDoughnutServing = document.getElementById(
    "glazedDoughnut-servings"
  ).value;

  if (glazedDoughnutServing === "" || glazedDoughnutServing <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("donut-milk").innerHTML =
    17 * glazedDoughnutServing + "ml";
  document.getElementById("donut-yeast").innerHTML =
    0.5 * glazedDoughnutServing + "g";
  document.getElementById("donut-sugar").innerHTML =
    4.5 * glazedDoughnutServing + "g";
  document.getElementById("donut-egg").innerHTML =
    7 * glazedDoughnutServing + "g";
  document.getElementById("donut-butter").innerHTML =
    6 * glazedDoughnutServing + "g";
  document.getElementById("donut-vanilla").innerHTML =
    0.308 * glazedDoughnutServing + "g";
  document.getElementById("donut-nutmeg").innerHTML =
    0.04 * glazedDoughnutServing + "g";
  document.getElementById("donut-salt").innerHTML =
    0.2 * glazedDoughnutServing + "g";
  document.getElementById("donut-flour").innerHTML =
    35 * glazedDoughnutServing + "g";
};

// ENSAIMADA HTML FILE CODE
const ensaimadaIngredients = () => {
  const ensaimadaServing = document.getElementById("ensaimada-servings").value;

  if (ensaimadaServing === "" || ensaimadaServing <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("ensai-flour").innerHTML =
    99.6 * ensaimadaServing + "g";
  document.getElementById("ensai-butter").innerHTML =
    29.5 * ensaimadaServing + "g";
  document.getElementById("ensai-sugar").innerHTML =
    26 * ensaimadaServing + "g";
  document.getElementById("ensai-salt").innerHTML =
    1.02 * ensaimadaServing + "g";
  document.getElementById("ensai-cheese").innerHTML =
    19.2 * ensaimadaServing + "g";
  document.getElementById("ensai-egg").innerHTML = 25 * ensaimadaServing + "g";
  document.getElementById("ensai-yeast").innerHTML =
    1.19 * ensaimadaServing + "g";
  document.getElementById("ensai-milk").innerHTML =
    40.8 * ensaimadaServing + "g";
};

// CHEESECAKE HTML FILE CODE
const cheesecakeIngredients = () => {
  const cheesecakeServing = document.getElementById(
    "cheesecake-servings"
  ).value;
  if (cheesecakeServing === "" || cheesecakeServing <= 0) {
    alert("Invalid input! Please enter a number greater than 0.");
    return;
  }

  document.getElementById("cheesecake-crumbs").innerHTML =
    40.1 * cheesecakeServing + "g";
  document.getElementById("cheesecake-sugar").innerHTML =
    13.5 * cheesecakeServing + "g";
  document.getElementById("cheesecake-butter").innerHTML =
    20 * cheesecakeServing + "g";
  document.getElementById("cheesecake-creamcheese").innerHTML =
    229.8 * cheesecakeServing + "g";
  document.getElementById("cheesecake-granulated-sugar").innerHTML =
    60.8 * cheesecakeServing + "g";
  document.getElementById("cheesecake-vanilla").innerHTML =
    2.63 * cheesecakeServing + "g";
  document.getElementById("cheesecake-eggs").innerHTML =
    50.7 * cheesecakeServing + "g";
  document.getElementById("cheesecake-yolks").innerHTML =
    10.3 * cheesecakeServing + "g";
  document.getElementById("cheesecake-cream").innerHTML =
    24.3 * cheesecakeServing + "g";
};
