export const home = () => {
  const content = document.querySelector("#content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  content.appendChild(wrapper);

  // Section for creating elements
  const headline = document.createElement("h1");
  const supporting = document.createElement("p");
  const divider = document.createElement("div");

  // Section for writing Content
  headline.textContent = "Welcome To Bistro Huddy";
  supporting.textContent =
    "Bistro Huddy is a fictional restaurant and set created by Drew Talbert and his wife, Andrea Kelley.";

  // Section for appending Content
  wrapper.appendChild(headline);
  wrapper.appendChild(supporting);
  wrapper.appendChild(divider);
};
