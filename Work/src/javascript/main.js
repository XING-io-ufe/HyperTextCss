const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-bar");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle the 'active' class
});
