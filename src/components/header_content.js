import CompanyLogo from "../assets/resource/Site-logo.png";

export const header_content = () => {
  const content = document.querySelector("#header_content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Section for creating and appending the company logo
  const companyLogo = document.createElement("img");
  companyLogo.setAttribute("src", CompanyLogo);
  companyLogo.setAttribute("alt", "Bistro Huddy: Company Logo");
  companyLogo.setAttribute("class", "company-logo");
  content.appendChild(companyLogo);

  // Section for creating and handling navigation links
  const url_locations = ["Home", "Menu", "Location", "Our Story", "Contact"];
  const websiteNavigation = document.createElement("nav");
  websiteNavigation.setAttribute("class", "website-navigation"); // Added a class for styling
  content.appendChild(websiteNavigation);

  const websiteNavigation_list = document.createElement("ul");
  websiteNavigation_list.setAttribute("class", "navigation-list"); // Added a class for styling
  websiteNavigation.appendChild(websiteNavigation_list);

  url_locations.forEach((location) => {
    const websiteNavigation_list_item = document.createElement("li");
    websiteNavigation_list_item.setAttribute("class", "navigation-list-item"); // Added a class for styling
    websiteNavigation_list.appendChild(websiteNavigation_list_item);

    const websiteNavigation_list_item_action = document.createElement("button");
    websiteNavigation_list_item_action.setAttribute("class", "navigation-button"); // Added a class for styling
    websiteNavigation_list_item_action.textContent = location;
    websiteNavigation_list_item.appendChild(websiteNavigation_list_item_action);
  });
};
