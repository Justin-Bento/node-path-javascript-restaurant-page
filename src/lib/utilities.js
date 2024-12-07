// Function to create and return an element with text content
export function Text(element, content) {
  let newElement = document.createElement(element);
  newElement.textContent = content;
  return newElement; // Ensure the created element is returned
}

export function Image(url = "", altText = "", className = "") {
  // Create the image element
  let element = document.createElement("img");
  // Set attributes
  element.setAttribute("src", url); // Use the passed URL
  element.setAttribute("alt", altText); // Use the passed alt text
  element.setAttribute("class", className); // Use the passed class name

  // Return the element for further use
  return element;
}