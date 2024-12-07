import CompanyLogo from "../assets/resource/Site-logo.png";

export const header_content = () => {
  const content = document.querySelector("#header_content");

  // Clear existing content
  content.innerHTML = "";

  // Create and append the company logo
  const companyLogo = document.createElement("img");
  companyLogo.setAttribute("src", CompanyLogo);
  companyLogo.setAttribute("alt", "Bistro Huddy: Company Logo");
  companyLogo.setAttribute("class", "company-logo");
  content.appendChild(companyLogo);

  // Create the navigation container
  const websiteNavigation = document.createElement("nav");
  websiteNavigation.setAttribute("class", "website-navigation");
  content.appendChild(websiteNavigation);

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
