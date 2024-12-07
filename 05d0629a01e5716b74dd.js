import { home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { contact } from "./pages/contact.js";
import { menu } from "./pages/menu.js";
import { header_content } from "./components/header_content.js";
import { footer_content } from "./components/footer_content.js";
import "./style.css";

// Function to render the appropriate page based on the route
const renderPage = (route) => {
  const content = document.querySelector("#content");
  content.innerHTML = ""; // Clear the current page content

  switch (route) {
    case "/about":
      about();
      break;
    case "/contact":
      contact();
      break;
    case "/menu":
      menu();
      break;
    default:
      home(); // Default to home
  }
};

// Handle navigation
const handleNavigation = (route) => {
  // Push the route to the history stack
  window.history.pushState({}, "", route);

  // Render the appropriate page
  renderPage(route);
};

// Add event listeners for navigation buttons
const setupNavigation = () => {
  const navButtons = document.querySelectorAll(".navigation-button");

  navButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const route = event.target.getAttribute("data-route");
      handleNavigation(route);
    });
  });
};

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  header_content(); // Render header
  renderPage(window.location.pathname); // Render the initial page based on the current route
  footer_content(); // Render footer

  setupNavigation(); // Setup navigation for buttons

  // Handle back/forward navigation
  window.addEventListener("popstate", () => {
    renderPage(window.location.pathname);
  });
});
