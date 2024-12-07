export const footer_content = () => {
  const content = document.querySelector("#footer_content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Section for creating elements
  const supporting = document.createElement("p");

  // Section for writing Content
  supporting.textContent = "Website Footer.";

  // Section for appending Content
  content.appendChild(supporting);
};
