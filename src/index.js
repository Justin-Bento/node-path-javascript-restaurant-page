import "./styles.css";
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { Home } from "./pages/home.js";

document.addEventListener("DOMContentLoaded", () => {
  Header();
  Home();
  Footer();
});
