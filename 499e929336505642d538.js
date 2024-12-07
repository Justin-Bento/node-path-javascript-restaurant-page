// Import the main_page function
import { main_page } from "./main_page.js";
import { header_content } from "./components/header_content.js";
import { footer_content } from "./components/footer_content.js";
import "./style.css";
// Call the function to render the content
document.addEventListener("DOMContentLoaded", () => {
  header_content();
  main_page();
  footer_content();
});
