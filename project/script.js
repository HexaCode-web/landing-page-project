//variables
//for the auto hiding navbar
var isScrolling;
const navBar = document.querySelector(".nav-box");
//for the active state
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
var ScrollToTheTop = document.getElementById("scrollToTheTop");
const constNumber = 400;
const clientHeight = document.documentElement.clientHeight;
//for the active nav item
const selected = document.createElement("div");
selected.classList.add("nav-Active");
//for creating sections
const body = document.querySelector(".content");
//functions
//for the autohide navbar

document.addEventListener(
  "scroll",
  function () {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      navBar.style.display = "none";
    }, 3000);
  },
  false
);
//for the active class
document.addEventListener("scroll", function () {
  //makes the navbar visible
  navBar.style.display = "block";
  //location of the section
  const sec1Position = section1.getBoundingClientRect().top;
  //before the && is the entry point. after the && is the exist point
  if (clientHeight > sec1Position && sec1Position > -200) {
    ScrollToTheTop.style.display = "none";
    const item = document.querySelector(`#button1`);
    item.appendChild(selected);
    section1.classList.add("active");
  } else {
    section1.classList.remove("active");
  }

  const sec2Position = section2.getBoundingClientRect().top + constNumber;
  if (clientHeight > sec2Position && sec2Position > 200) {
    ScrollToTheTop.style.display = "none";
    const item = document.querySelector(`#button2`);
    item.appendChild(selected);
    section2.classList.add("active");
  } else {
    section2.classList.remove("active");
  }

  const sec3Position = section3.getBoundingClientRect().top + constNumber;
  //needs 2 entries to get the exact correct entry
  if (clientHeight > sec3Position && sec2Position < 200 && sec3Position > 200) {
    ScrollToTheTop.style.display = "block";
    const item = document.querySelector(`#button3`);
    item.appendChild(selected);
    section3.classList.add("active");
  } else {
    section3.classList.remove("active");
  }

  const sec4Position = section4.getBoundingClientRect().top + constNumber;
  if (clientHeight > sec4Position && sec4Position > -200) {
    ScrollToTheTop.style.display = "block";
    const item = document.querySelector(`#button4`);
    item.appendChild(selected);
    section4.classList.add("active");
  } else {
    section4.classList.remove("active");
  }
});
//creates navigation item takes 2 parameters
//name. the name of the navigation item
//secNum the anchored section
const nav = document.querySelector("#nav");
function addNav(name, secNum) {
  const newNav = document.createElement("li");
  newNav.innerHTML = `<button id=button${secNum} onclick="myFunction(${secNum})">${name}</button>`;
  nav.appendChild(newNav);
}
//scroll into view function only gets called inside addNav
function myFunction(secNum) {
  const section = document.getElementById(`section${secNum}`);
  section.scrollIntoView({ behavior: "smooth" });
  const item = document.querySelector(`#button${secNum}`);
  item.appendChild(selected);
}
//creates section takes 3 parameters
//secNum for the id of the section will help in scrolling
//header. the title of the section
//secContent the content of the section (can be put in html code.)
function newSection(secNum, header, secContent, navigation) {
  const newEl = document.createElement("div");
  newEl.classList.add(`section`);
  newEl.setAttribute(`id`, `section${secNum}`);
  const heading = document.createElement("h2");
  heading.innerHTML = `${header}`;
  const para = document.createElement("p");
  para.innerHTML = `${secContent}`;
  body.appendChild(newEl);
  newEl.appendChild(heading);
  newEl.appendChild(para);
  addNav(navigation, secNum);
}
//called functions by default
//note: it also creates a navigation item for it.
//note: you neeed to add the active state manually from the scrolling function
addNav("section1", 1);
addNav("section2", 2);
addNav("section3", 3);
addNav("section4", 4);
