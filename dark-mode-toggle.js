// Dark mode toggle functionality
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", toggleDarkMode);
