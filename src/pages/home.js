import { Text } from "../lib/utilities";
import { home_elements } from "../api/menu";

export const home = () => {
  const content = document.querySelector("#content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Create and append a wrapper
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  content.appendChild(wrapper);

  // Section for creating and appending elements
  home_elements.forEach(({ element, content }) => {
    wrapper.appendChild(Text(element, content));
  });
};
