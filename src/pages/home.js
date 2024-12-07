export const home = () => {
  const content = document.querySelector("#content");

  // Clear existing content to prevent duplicates
  content.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  content.appendChild(wrapper);

  // Section for creating elements
  const headline = document.createElement("h1");
  const supporting = document.createElement("p");
  const divider = document.createElement("div");

  // Section for writing Content
  headline.textContent = "Welcome To Bistro Huddy";
  supporting.textContent =
    "Bistro Huddy is a fictional restaurant and set created by Drew Talbert and his wife, Andrea Kelley.";

  // Section for appending Content
  wrapper.appendChild(headline);
  wrapper.appendChild(supporting);
  wrapper.appendChild(divider);

  const entree = document.createElement("h2");
  entree.textContent = "specials";
  const menu_list = document.createElement("ul");
  menu_list.setAttribute("id", "menu-list");
  // Populate the menu list with items from the array
  specials.forEach((entree) => {
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

const specials = [
  {
    name: "Sanafé Chicken Plate",
    description: "Juicy grilled or fried chicken in signature sanafé sauce, served with rice and veggies.",
    price: "$18",
  },
  {
    name: "The 'That’s Too Many Toppings' Burger",
    description: "Beef patty topped with sanafé sauce, bacon, cheddar, fried onion strings, and a fried egg.",
    price: "$17",
  },
  {
    name: "Huddy's Cajun Alfredo",
    description: "Fettuccine in creamy Cajun Alfredo sauce with grilled chicken or shrimp.",
    price: "$20",
  },
  {
    name: "The 'Actually, We’re Out' Special",
    description: "Pan-seared salmon (or chicken), served with mashed potatoes and green beans.",
    price: "$22",
  },
];
