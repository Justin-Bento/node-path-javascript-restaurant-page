import { home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { contact } from "./pages/contact.js";
import { menu } from "./pages/menu.js";
import { header_content } from "./components/header_content.js";
import { footer_content } from "./components/footer_content.js";
import "./style.css";

// Get the repository name for GitHub Pages routing
const REPO_NAME = window.location.pathname.split("/")[1];
const BASE_PATH = REPO_NAME ? `/${REPO_NAME}` : "";

// Function to render the appropriate page based on the route
const handleNavigation = (route) => {
  // Use pushState for clean URLs
  history.pushState(null, "", `${BASE_PATH}${route}`);
  renderPage(route);
};

const renderPage = (route) => {
  const content = document.querySelector("#content");
  content.innerHTML = ""; // Clear the content

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

// Listen for popstate events (browser back/forward)
window.addEventListener("popstate", () => {
  // Extract route from current pathname, removing repo name if present
  const path = window.location.pathname.replace(`${BASE_PATH}`, "") || "/";
  renderPage(path);
});

// Setup navigation buttons
const setupNavigation = () => {
  const navButtons = document.querySelectorAll(".navigation-button");
  navButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const route = event.target.getAttribute("data-route");
      handleNavigation(route);
    });
  });
};

// Initial app initialization
document.addEventListener("DOMContentLoaded", () => {
  // Render header and footer
  header_content();
  footer_content();

  // Determine initial route, accounting for GitHub Pages base path
  const initialPath = window.location.pathname.replace(`${BASE_PATH}`, "") || "/";

  // Render initial page
  renderPage(initialPath);

  // Setup navigation
  setupNavigation();
});

// Ensure links work correctly on GitHub Pages
document.addEventListener("click", (e) => {
  const target = e.target.closest("a");
  if (target && target.getAttribute("data-route")) {
    e.preventDefault();
    const route = target.getAttribute("data-route");
    handleNavigation(route);
  }
});
