import bistroHuddyHeroBanner from "../assets/resource/images/bistro-huddy-fake-concept.webp";

export const Home = () => {
  const content = document.querySelector("#content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Create an image element and append it to the wrapper
  const imgElement = document.createElement("img");
  imgElement.src = bistroHuddyHeroBanner; // Webpack resolves this path automatically
  imgElement.alt = "Hero Banner for Bistro Huddy"; // Add alt text for accessibility
  imgElement.setAttribute("class", "heroBanner");
  content.appendChild(imgElement);

  // Create and append a wrapper
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  content.appendChild(wrapper);

  // Create a heading element and append it to the wrapper
  const heading1 = document.createElement("h1");
  heading1.textContent = "Bistro Huddy";
  wrapper.appendChild(heading1);

  // Create a heading element and append it to the wrapper
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Bistro Huddy is a workplace comedy solo performance web series created and written by Drew Talbert and Andrea Kelley.";
  wrapper.appendChild(paragraph);

  // Create a heading element and append it to the wrapper
  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Set in Los Angeles in the titular restaurant, it revolves around the daily lives of the Bistro Huddy staff and their guests.";
  wrapper.appendChild(paragraph2);
};
