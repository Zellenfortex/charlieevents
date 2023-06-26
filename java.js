window.addEventListener("scroll", function () {
  const navColor = document.querySelector("nav");
  const paddingTop = document.querySelector("ul");
  const logo = document.querySelector(".logo__size");
  const before = document.querySelector(".active");
  const hamburgerResize = document.querySelector(".hamburger");

  // toggle classes
  navColor.classList.toggle("nav__color", window.scrollY > 0);
  paddingTop.classList.toggle("padding__topUl", window.scrollY > 0);
  logo.classList.toggle("logoImg", window.scrollY > 0);
  before.classList.toggle("lineActive", window.scrollY > 0);
  hamburgerResize.classList.toggle("resizeToggleMobile", window.scrollY > 0);
});

const underLineScrollY = document.querySelectorAll(".underline");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    underLineScrollY.forEach((underLineScrollY) => {
      underLineScrollY.classList.remove("underline");
      underLineScrollY.classList.add("underLineBoldWhenScroll");
    });
    // underLineScrollY.classList.remove("underline"));
  } else {
    // underLineScrollY.classList.add('underline');
    underLineScrollY.forEach((underLineScrollY) => {
      underLineScrollY.classList.add("underline");
      underLineScrollY.classList.remove("underLineBoldWhenScroll");
    });
    // underLineScrollY.classList.add("underline"));
  }
});

// HAMBURGER SCRIPT

const hamburger = document.querySelector(".hamburger");
const layers = document.querySelectorAll(".hamburger span");

hamburger.addEventListener("click", () => {
  // console.log(layers)
  layers.forEach((layers) => layers.classList.toggle("activeHamburger"));
});

const btn = document.getElementById("btn");
const navMenu = document.getElementById("navMenu");
const logo = document.querySelector(".logo__size");

btn.addEventListener("click", () => {
  navMenu.classList.toggle("actives");

  if (window.innerWidth < 558) {
    if (logo.style.opacity === "0") {
      logo.style.display = "inline-block";
      setTimeout(() => {
        logo.style.opacity = "1";
      }, 150);
    } else {
      logo.style.opacity = "0";
      setTimeout(() => {
        logo.style.opacity === "0";
      }, 150);
    }
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 584) {
    if (logo.style.opacity === "0") {
      logo.style.opacity = "1";
    }
  }
});

const footer = document.querySelector(".footer");
const shape = document.querySelector(".custom-shape");

let zIndex = 1;

btn.addEventListener("click", () => {
  if (zIndex === 1) {
    footer.style.zIndex = "-1";
    zIndex = -1;
  } else {
    footer.style.zIndex = "1";
    zIndex = 1;
  }
});

//image a href
var image = document.getElementById("my-image");
image.addEventListener("click", function () {
  window.open(
    "https://www.livetickets.ro/bilete/spring-breakers-dubla-x-charlie",
    "_blank"
  );
});
