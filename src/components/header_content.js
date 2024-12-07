export const header_content = () => {
  const content = document.querySelector("#header_content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Section for creating elements
  const supporting = document.createElement("p");

  // Section for writing Content
  supporting.textContent = "Website Navigation.";

  // Section for appending Content
  content.appendChild(supporting);
};
