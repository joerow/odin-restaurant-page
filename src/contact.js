export default function loadContact() {
  console.log("clicked contact");
  //remove all content children
  let element = document.getElementById("content");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  // create the menu container
  const contact = document.createElement("div");
  contact.id = "contact";
  contact.innerHTML =
    '<iframe class="Gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.022247720062!2d-99.15461575618177!3d19.4337578543638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d2e0e4dbd%3A0x905574a740c4893d!2sHistoric%20center%20of%20Mexico%20City%2C%20Centro%2C%20Mexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2smy!4v1671093486710!5m2!1sen!2smy" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  element.append(contact);

  const footer = document.getElementById("footer");
  footer.innerHTML = "";
}
