const menu = document.querySelector(".menuItems");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector("#closeIcon");
const menuIcon = document.querySelector("#menuIcon");
const windowSize = window.innerWidth;

/*Control of Menu buttons with toggle*/
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.toggle("showMenu");
    menuIcon.classList.toggle("toggleBlock");
    closeIcon.classList.toggle("toggleBlock");
  } 
   else {
    menu.classList.toggle("showMenu");
    menuIcon.classList.toggle("toggleBlock");
    closeIcon.classList.toggle("toggleBlock");
    closeIcon.addEventListener("click", unsetScroll);
  }
}

/*Adding a control over a menu and onload-scroll on menu buttons */
menuItems.forEach( 
  function(menuItem) {  
    menuItem.addEventListener("click", toggleMenu);
    menuItem.addEventListener("click", unsetScroll);
  }
)

/*Preventing open menu on resize */
function removeMenuOnResize() {
  menu.classList.remove("showMenu");
  closeIcon.classList.remove("toggleBlock");
  menuIcon.classList.add("toggleBlock");
}

/*Preventing under-menu scroll, on small devices */
function setScroll() {
  document.body.style.overflow = "hidden" 
}
function unsetScroll() {
  document.body.style.overflow = "visible" 
}

/*Showing Logo for 2sec and after allowing scroll*/
window.onload = setTimeout(function onloadLogoandScroll(){ 
  document.getElementById("loading").style.display = "none";
  document.body.style.overflow = "visible";
}, 2000)

menuIcon.addEventListener("click", setScroll);
window.addEventListener('resize', removeMenuOnResize);
hamburger.addEventListener("click", toggleMenu);