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
    Text(
      "p",
      "Bistro Huddy is a workplace comedy solo performance web series created and written by Drew Talbert and Andrea Kelley."
    )
  );
  wrapper.appendChild(
    Text(
      "p",
      "Set in Los Angeles in the titular restaurant, it revolves around the daily lives of the Bistro Huddy staff and their guests."
    )
  );
};
