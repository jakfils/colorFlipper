const navElts = document.querySelectorAll("li");
const buttonElt = document.querySelector("button");
let randomColorIndex = 0;

// List of colors
let colors = {
  Maroon: "#800000",
  Brown: "#9A6324",
  Olive: "#808000",
  Teal: "#469990",
  Navy: "#000075",
  Red: "#e6194B",
  Orange: "#f58231",
  Yellow: "#ffe119",
  Lime: "#bfef45",
  Green: "#3cb44b",
  Cyan: "#42d4f4",
  Blue: "#4363d8",
  Purple: "#911eb4",
  Magenta: "#f032e6",
  Pink: "#fabed4",
};

let colorsKeys = Object.keys(colors);
let colorValues = Object.values(colors);

//Add or remove class "active" on nav items
navElts.forEach((navElt) => {
  navElt.addEventListener("click", () => {
    for (let navElt of navElts) {
      navElt.classList.remove("active");
    }
    navElt.classList.add("active");
    colorValues[randomColorIndex];
  });
});

// Choose random color index, Change background color, background color name or background color hexadecimal value
buttonElt.addEventListener("click", () => {
  randomColorIndex = Math.floor(Math.random() * colorsKeys.length);
  document.querySelector(".block").style.backgroundColor =
    colorValues[randomColorIndex];
  const navActiveElt = document.querySelector(".active");
  if (navActiveElt.textContent === "Simple") {
    document.getElementById("colorId").textContent =
      colorsKeys[randomColorIndex];
  } else {
    document.getElementById("colorId").textContent =
      colorValues[randomColorIndex];
  }
});
