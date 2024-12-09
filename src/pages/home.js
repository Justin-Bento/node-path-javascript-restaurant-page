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
};
