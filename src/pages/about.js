import CompanyLogo from "../assets/resource/bistrohuddy_crew.png";

export const about = () => {
  const content = document.querySelector("#content");
  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Create and append the company logo
  const companyLogo = document.createElement("img");
  companyLogo.setAttribute("src", CompanyLogo);
  companyLogo.setAttribute("alt", "Bistro Huddy: Company Logo");
  companyLogo.setAttribute("class", "company-crew");
  content.appendChild(companyLogo);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  content.appendChild(wrapper);

  // Section for creating elements
  const headline = document.createElement("h1");
  const supporting = document.createElement("p");

  // Section for writing Content
  headline.textContent = "About Bistro Huddy";
  supporting.textContent =
    "Bistro Huddy is a fictional restaurant and set created by Drew Talbert and his wife, Andrea Kelley.";
  // Append the menu list to the content
  wrapper.appendChild(headline);
  wrapper.appendChild(supporting);
};
