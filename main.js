const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  let pic = `images/pic${i}.jpg`;
  const newImage = document.createElement("img");
  newImage.setAttribute("src", pic);
  thumbBar.appendChild(newImage);

  newImage.onclick = function () {
    displayedImage.setAttribute("src", pic);
  };
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function () {
  let getAttributeButton = btn.getAttribute("class");

  if (getAttributeButton === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
  }
};
