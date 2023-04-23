function classToggle() {
  var el = document.querySelector(".icon-cards__content");
  el.classList.toggle("step-animation");
}

document
  .querySelector("#toggle-animation")
  .addEventListener("click", classToggle);

var sidebarParent = document.getElementById("s__m");
var sidebar = document.getElementById("__s");

function showsidebar() {
  sidebarParent.style.display = "flex"
  sidebar.style.animation = "anim 0.5s forwards";
  document.getElementById("body").style.overflowY = "hidden"
}

function closesidebar(){
  sidebar.style.animation = "anim1 0.5s forwards";
  document.getElementById("body").style.overflowY = "scroll";
  setTimeout(function(){
    sidebarParent.style.display = "none";
  }, 500)
}

function scrolltooption(){
  sidebar.style.animation = "anim1 0.5s forwards";
  document.getElementById("body").style.overflowY = "scroll";
  setTimeout(function () {
    sidebarParent.style.display = "none";
  }, 500);
}