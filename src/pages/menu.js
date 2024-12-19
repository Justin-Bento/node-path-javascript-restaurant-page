import { food } from "../api/menus.js";

export const menu = () => {
  const content = document.querySelector("#content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  content.appendChild(wrapper);

  // Section for creating elements
  const headline = document.createElement("h1");
  const supporting = document.createElement("p");

  // Section for writing Content
  headline.textContent = "Bistro Huddy Menu";
  supporting.textContent =
    "Bistro Huddy is a fictional restaurant and set created by Drew Talbert and his wife, Andrea Kelley.";
  // Append the menu list to the content
  wrapper.appendChild(headline);
  wrapper.appendChild(supporting);

  const entree = document.createElement("h2");
  entree.textContent = "specials";
  const menu_list = document.createElement("ul");
  menu_list.setAttribute("id", "menu-list");
  // Populate the menu list with items from the array
  food.smallBites.forEach((entree) => {
    const menu_list_item = document.createElement("li");
    menu_list_item.classList.add("menu-list-item");

    // Create a structure for each list item
    menu_list_item.innerHTML = `
        <strong>${entree.name}</strong><br>
        <span>${entree.description}</span><br>
        <em>${entree.price}</em>
      `;

    // Append the list item to the menu list
    menu_list.appendChild(menu_list_item);
  });

  // Append the menu list to the content
  wrapper.appendChild(entree);
  wrapper.appendChild(menu_list);
};
