import { home } from "./pages/home.js";
// import { about } from "./pages/about.js";
// import { contact } from "./pages/contact.js";
// import { menu } from "./pages/menu.js";
import { header_content } from "./components/header_content.js";
import { footer_content } from "./components/footer_content.js";
import "./style.css";
// Call the function to render the content
document.addEventListener("DOMContentLoaded", () => {
  header_content();
  home();
  footer_content();
});
