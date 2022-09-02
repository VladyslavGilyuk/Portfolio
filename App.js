const menu = document.querySelector(".menuItems");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const windowSize = window.innerWidth;

function toggleMenu() {

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.classList.remove("asblock");
    menuIcon.classList.add("asblock");
    menuIcon.classList.remove("asnone");
  } 
   else {
    menu.classList.add("showMenu");
    menuIcon.classList.remove("asblock");
    menuIcon.classList.remove("menubtn");
    menuIcon.classList.add("asnone");
    closeIcon.classList.add("asblock");
  
  }

}

menuItems.forEach( 
  function(menuItem) {  
    menuItem.addEventListener("click", toggleMenu);
  }
)

function removeMenuOnResize() {
  menu.classList.remove("showMenu");
  closeIcon.classList.remove("asblock");
  menuIcon.classList.add("asblock");
  menuIcon.classList.remove("asnone");
}

window.addEventListener('resize', removeMenuOnResize);
window.onload = setTimeout(function onloadLogo(){ document.getElementById("loading").style.display = "none" }, 2000)

hamburger.addEventListener("click", toggleMenu);