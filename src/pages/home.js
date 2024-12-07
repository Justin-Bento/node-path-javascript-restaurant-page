export const home = () => {
  const content = document.querySelector("#content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Create and append a wrapper
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  content.appendChild(wrapper);

  // Function to create and return an element with text content
  function Text(element, content) {
    let newElement = document.createElement(element);
    newElement.textContent = content;
    return newElement; // Ensure the created element is returned
  }

  // Section for creating and appending elements
  wrapper.appendChild(Text("h1", "Welcome To Bistro Huddy"));
  wrapper.appendChild(
    Text("p", "Bistro Huddy is a fictional restaurant and set created by Drew Talbert and his wife, Andrea Kelley.")
  );
};
x`x`;
