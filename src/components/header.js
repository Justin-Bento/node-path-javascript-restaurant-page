import BistroHuddyLogo from "../assets/resource/images/Site-logo.png";

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
  myImage.alt = "Bistro Huddy Company Logo"; // Use the passed alt text
  myImage.className = "company-logo"; // Use the passed class name

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

  // Create navigation links
  navItems.forEach((item) => {
    const navListItem = document.createElement("li");
    navListItem.setAttribute("class", "navigation-list-item");

    const navButton = document.createElement("button");
    navButton.textContent = item.name;
    navButton.setAttribute("class", "navigation-button");
    navButton.setAttribute("data-route", item.route); // Add data-route attribute
    navListItem.appendChild(navButton);

    websiteNavigation_list.appendChild(navListItem);
  });
};
