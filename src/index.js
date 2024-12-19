// Import styles and assets
import "./styles.css";
import BistroHuddyLogo from "./assets/resource/images/Site-logo.png";

// Import pages
import { Home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { menu } from "./pages/menu.js";
import { contact } from "./pages/contact.js";

// Import components
import { Footer } from "./components/footer.js";

// Function to clear and load content dynamically
function switchTab(route) {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Clear existing content

  switch (route) {
    case "/":
      Home();
      break;
    case "/about":
      about();
      break;
    case "/menu":
      menu();
      break;
    case "/contact":
      contact();
      break;
    default:
      console.error("Unknown route:", route);
  }
}

// Function to set up the header
function setupHeader() {
  const content = document.querySelector("header");
  content.innerHTML = ""; // Clear existing content

  const headerContainer = document.createElement("div");
  headerContainer.setAttribute("class", "content");
  content.appendChild(headerContainer);

  // Add company logo
  const logo = document.createElement("img");
  logo.src = BistroHuddyLogo;
  logo.alt = "Bistro Huddy Company Logo";
  logo.className = "company-logo";
  headerContainer.appendChild(logo);

  // Create navigation
  const nav = document.createElement("nav");
  nav.setAttribute("class", "website-navigation");
  headerContainer.appendChild(nav);

  const navList = document.createElement("ul");
  navList.setAttribute("class", "navigation-list");
  nav.appendChild(navList);

  // Define navigation items
  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Menu", route: "/menu" },
    { name: "Contact", route: "/contact" },
  ];

  // Create navigation buttons
  navItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "navigation-list-item");

    const button = document.createElement("button");
    button.textContent = item.name;
    button.setAttribute("class", "navigation-button");
    button.setAttribute("data-route", item.route);

    // Add click event listener for tab switching
    button.addEventListener("click", () => switchTab(item.route));

    listItem.appendChild(button);
    navList.appendChild(listItem);
  });
}

// Main initialization function
function initializeApp() {
  setupHeader(); // Setup header and navigation
  Home(); // Load default Home page
  Footer(); // Setup footer
}

// Initialize the application after DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeApp);
