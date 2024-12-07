import CompanyLogo from "../assets/resource/Site-logo.png";

export const header_content = () => {
  const content = document.querySelector("#header_content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Section for creating elements
  const companyLogo = document.createElement("img");
  companyLogo.setAttribute("src", CompanyLogo);
  companyLogo.setAttribute("alt", "Bistro Huddy: Company Logo");
  companyLogo.setAttribute("class", "company-logo");
  // Section for appending Content
  content.appendChild(companyLogo);
};
