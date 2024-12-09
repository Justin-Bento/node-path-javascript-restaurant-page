import heroBanner from "../assets/resource/images/bistro-huddy-fake-concept.webp";

export const Home = () => {
  // Get the <main> element and verify its existence
  const mainContent = document.querySelector("main");
  if (!mainContent) {
    console.error("Main content element <main> not found in the DOM.");
    return;
  }

  // Create an image element and append it to the wrapper
  const imgElement = document.createElement("img");
  imgElement.src = heroBanner;
  imgElement.alt = "Hero Banner for Bistro Huddy";
  imgElement.className = "heroBanner";
  mainContent.appendChild(imgElement);

  // Create a wrapper div and append it to the main content
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  mainContent.appendChild(wrapper);

  // Create a heading element and append it to the wrapper
  const heading1 = document.createElement("h1");
  heading1.textContent = "Bistro Huddy";
  wrapper.appendChild(heading1);
};
