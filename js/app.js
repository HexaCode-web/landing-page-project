//variables
//for the auto hiding navbar
let isScrolling;
let sectionPosition;
const navBar = document.querySelector(".nav-box");
//for the active state
let sections = Array.from(document.getElementsByClassName("section"));
const menu = document.getElementById("nav");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
const createSection = document.querySelector("#createSec");
const ScrollToTheTop = document.getElementById("scrollToTheTop");
const constNumber = 400;
const clientHeight = document.documentElement.clientHeight;
//for the active nav item
const selected = document.createElement("div");
selected.classList.add("nav-Active");
//for creating sections
const body = document.querySelector(".content");
//getting the info for the new section
const form = document.querySelector("#form");
const secID = document.querySelector("#secID");
const SecHeader = document.querySelector("#SecHeader");
const secContent = document.querySelector("#secContent");
const secNav = document.querySelector("#secNav");
const secNum = document.querySelector("#secNum");
const FormBTN = document.querySelector("#submit");

//functions
//for the autohide navbar

document.addEventListener("scroll", function () {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    navBar.style.display = "none";
  }, 3000);
});
navBar.addEventListener(
  "mouseover",
  function () {
    navBar.style.display = "block";
  },
  true
);
//for the active class
document.addEventListener("scroll", function focusOnSection() {
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
//creates section takes 5 parameters
//gets called by the button CreateSection
//secNum for the id of the section will help in scrolling
//header. the title of the section
//secContent the content of the section (can be put in html code.)
//navigation : the name of the navigate itme
function newSection(secID, header, secContent, navigation, secNum) {
  const newEl = document.createElement("section");
  if (secNum <= 4) {
    alert("number of the section must be above 4");
    return;
  }
  newEl.classList.add(`section`);
  newEl.setAttribute(`id`, secID);
  sections = Array.from(document.getElementsByClassName("section"));
  const heading = document.createElement("h2");
  heading.innerHTML = `${header}`;
  const para = document.createElement("p");
  para.innerHTML = `${secContent}`;
  body.appendChild(newEl);
  newEl.appendChild(heading);
  newEl.appendChild(para);

  addNav(navigation, secNum);
  return { sectionPosition, secID };
}
//happens after you click on CreateSection button
createSection.addEventListener("click", function () {
  //makes the popup form visible
  form.style.display = "flex";
});
//creates the section AND closes the form
function closeForm() {
  newSection(
    secID.value,
    SecHeader.value,
    secContent.value,
    secNav.value,
    secNum.value
  );
  form.style.display = "none";
}
//gets called by goBack button
function goBack() {
  form.style.display = "none";
}
//called functions by default
//note: it also creates a navigation item for it.
//note: you neeed to add the active state manually from the scrolling function
addNav("section1", 1);
addNav("section2", 2);
addNav("section3", 3);
addNav("section4", 4);
