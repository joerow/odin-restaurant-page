import burritoImage from "./burritos.png";
import nachosImage from "./nachos.png";
import tacosImage from "./tacos.png";

export default function loadMenu() {
  console.log("clicked menu");
  //remove all content children
  let element = document.getElementById("content");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  // create the menu container
  const menuList = document.createElement("div");
  menuList.id = "menuList";
  element.append(menuList);

  class MenuItem {
    constructor(title, description, imageName) {
      this.title = title;
      this.description = description;
      this.imageName = imageName;
    }
  }

  let burrito = new MenuItem(
    "Vegan Burritos",
    "Featuring cilantro-lime rice, chipotle-spiced black beans, sautéed peppers and onions, and a zesty avocado cream sauce",
    burritoImage
  );
  let nachos = new MenuItem(
    "Vegan nachos",
    "Ultimate Fully Loaded Vegan Nachos with the most delicious vegan ground “beef” and nacho cheese!",
    nachosImage
  );
  let tacos = new MenuItem(
    "Vegan tacos",
    "Jerk-spiced jackfruit and mango avocado salsa pack these vegan tacos with a big punch of flavor!",
    tacosImage
  );

  function buildMenuCards(MenuItem) {
    const menuItemContainer = document.createElement("div");
    menuItemContainer.id = MenuItem.title;
    menuItemContainer.classList.add("menuitem");
    menuList.append(menuItemContainer);
    let menuItemImage = new Image();
    menuItemImage.src = MenuItem.imageName;
    console.log();
    menuItemImage.classList.add("menuItemImage");
    menuItemContainer.appendChild(menuItemImage);
    let menuItemTextContainer = document.createElement("div");
    menuItemTextContainer.classList.add("ItemText");
    menuItemContainer.appendChild(menuItemTextContainer);
    let menuItemTitle = document.createElement("h2");
    menuItemTitle.textContent = MenuItem.title;
    menuItemTitle.classList.add("ItemTitle");
    menuItemTextContainer.appendChild(menuItemTitle);
    let menuItemDescription = document.createElement("div");
    menuItemDescription.classList.add("itemDescription");
    menuItemDescription.textContent = MenuItem.description;
    menuItemTextContainer.appendChild(menuItemDescription);
    menuList.append(menuItemContainer);
  }

  buildMenuCards(burrito);
  buildMenuCards(nachos);
  buildMenuCards(tacos);

  const footer = document.getElementById("footer");
  footer.innerHTML =
    "<p style='opacity: 50%'> Images by <a href='https://www.freepik.com/free-vector/mexican-food-poster_1538284.htm#query=beef%20burrito&position=4&from_view=search&track=sph'>macrovector</a> on Freepik</p>";
}
