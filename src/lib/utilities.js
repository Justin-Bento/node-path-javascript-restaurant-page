// Function to create and return an element with text content
export function Text(element, content) {
  let newElement = document.createElement(element);
  newElement.textContent = content;
  return newElement; // Ensure the created element is returned
}
