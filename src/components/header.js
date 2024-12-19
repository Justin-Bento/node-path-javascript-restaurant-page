import BistroHuddyLogo from "../assets/resource/images/Site-logo.png";
import { Home } from "../pages/home.js";
import { about } from "../pages/about.js";
import { menu } from "../pages/menu.js";
import { contact } from "../pages/contact.js";

// Function to clear and load content dynamically
function switchTab(route) {
  const content = document.getElementById("content"); // Ensure your main content div has this ID
  content.innerHTML = ""; // Clear existing content

  switch (route) {
    case "/":
      Home(); // Replace with your actual Home module function
      break;
    case "/about":
      about(); // Replace with your actual About module function
      break;
    case "/menu":
      menu(); // Replace with your actual Menu module function
      break;
    case "/contact":
      contact(); // Replace with your actual Contact module function
      break;
    default:
      console.error("Unknown route:", route);
  }
}

export const Header = () => {
  const content = document.querySelector("header");
  // Clear existing content
  content.innerHTML = "";

  const header_container = document.createElement("div");
  header_container.setAttribute("class", "content");
  content.appendChild(header_container);

  // Create and append the company logo
  let myImage = document.createElement("img");
  myImage.src = BistroHuddyLogo;
  myImage.alt = "Bistro Huddy Company Logo";
  myImage.className = "company-logo";

  header_container.appendChild(myImage);

  // Create the navigation container
  const websiteNavigation = document.createElement("nav");
  websiteNavigation.setAttribute("class", "website-navigation");
  header_container.appendChild(websiteNavigation);

  // Create the navigation list
  const websiteNavigation_list = document.createElement("ul");
  websiteNavigation_list.setAttribute("class", "navigation-list");
  websiteNavigation.appendChild(websiteNavigation_list);

  // Define navigation items with routes
  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Menu", route: "/menu" },
    { name: "Contact", route: "/contact" },
  ];

  // Create navigation links and add event listeners
  navItems.forEach((item) => {
    const navListItem = document.createElement("li");
    navListItem.setAttribute("class", "navigation-list-item");

    const navButton = document.createElement("button");
    navButton.textContent = item.name;
    navButton.setAttribute("class", "navigation-button");
    navButton.setAttribute("data-route", item.route); // Add data-route attribute

    // Add click event listener to switch tabs
    navButton.addEventListener("click", () => switchTab(item.route));

    navListItem.appendChild(navButton);
    websiteNavigation_list.appendChild(navListItem);
  });
};
