import BistroHuddyCrew from "../assets/resource/images/bistrohuddy_crew.png";

export const About = () => {
  const content = document.querySelector("#content");
  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Create and append the company logo

  let myImage = document.createElement("img");
  myImage.setAttribute("src", BistroHuddyCrew);
  myImage.setAttribute("alt", "Bistro Huddy Crew"); // Use the passed alt text
  myImage.setAttribute("class", "company-crew"); // Use the passed class name

  content.appendChild(myImage);

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
