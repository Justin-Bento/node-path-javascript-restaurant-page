export const footer_content = () => {
  const content = document.querySelector("#footer_content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  // Create footer elements
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");

  const footerText = document.createElement("p");
  footerText.textContent = "© 2024 Bistro Huddy. All Rights Reserved.";

  const socialMedia = document.createElement("div");
  socialMedia.classList.add("social-media");

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ];

  socialLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    socialMedia.appendChild(anchor);
  });

  // Append elements to footer
  footerContainer.appendChild(footerText);
  footerContainer.appendChild(socialMedia);
  content.appendChild(footerContainer);
};
