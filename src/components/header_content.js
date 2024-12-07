import CompanyLogo from "../assets/resource/Site-logo.png";

export const header_content = () => {
  const content = document.querySelector("#header_content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Section for creating elements
  const supporting = document.createElement("img");
  supporting.setAttribute("src", CompanyLogo);
  supporting.setAttribute("alt", "Bistro Huddy: Company Logo");
  supporting.setAttribute("class", "company-logo");
  // Section for appending Content
  content.appendChild(supporting);
};
