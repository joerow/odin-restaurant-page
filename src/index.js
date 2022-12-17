import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function base() {
  const element = document.createElement("slot");
  element.id = "container";

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "Joerow's";
  element.append(title);

  const subtitle = document.createElement("h2");
  subtitle.classList.add("subtitle");
  subtitle.innerText = "Vegan Mexican Food";
  title.append(subtitle);

  const nav = document.createElement("div");
  nav.classList.add("nav");
  element.append(nav);

  const nav1 = document.createElement("button");
  nav1.classList.add("nav-item");
  nav1.textContent = "Home";
  nav1.addEventListener("click", loadHome);
  nav.appendChild(nav1);

  const nav2 = document.createElement("button");
  nav2.classList.add("nav-item");
  nav2.textContent = "Our Menu";
  nav2.addEventListener("click", loadMenu);
  nav.appendChild(nav2);

  const nav3 = document.createElement("button");
  nav3.classList.add("nav-item");
  nav3.textContent = "Contact";
  nav3.addEventListener("click", loadContact);
  nav.appendChild(nav3);

  const pageContent = document.createElement("div");
  pageContent.id = "content";
  element.append(pageContent);

  const footer = document.createElement("div");
  footer.id = "footer";
  element.append(footer);
  footer.innerHTML =
    "<p style='opacity: 50%'> Image by <a href='https://www.freepik.com/free-vector/engraving-hand-drawn-shawarma-illustration_15291722.htm#query=burrito&position=3&from_view=search&track=sph'>Freepik</a></p>";

  return element;
}

document.body.appendChild(base());
loadHome();
