import Logo from "./wrap.jpg";

export default function loadHome() {
  let element = document.getElementById("content");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  console.log("clicked home");
  const myLogo = new Image();
  myLogo.src = Logo;
  myLogo.classList.add("logo");
  element.appendChild(myLogo);

  const footer = document.getElementById("footer");
  footer.innerHTML =
    "<p style='opacity: 50%'> Image by <a href='https://www.freepik.com/free-vector/engraving-hand-drawn-shawarma-illustration_15291722.htm#query=burrito&position=3&from_view=search&track=sph'>Freepik</a></p>";

  return;
}
