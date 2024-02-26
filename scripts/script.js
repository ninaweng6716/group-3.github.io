const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// Lightmode function
function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

// Animation Begins when User scrolls to content
document.addEventListener('scroll', function(e) {
  var top = window.pageYOffset + window.innerHeight,
      isVisible = top > document.querySelector('#box-animation').offsetTop;
    
  if (isVisible) {
    document.getElementById('box-animation').classList.add('animate');
  }
})

// toggle sidebar content
const btnSide = document.getElementById('btn-sidebar');
const sidebar = document.getElementById('sidebar');

btnSide.addEventListener('click', toggleSide);

function toggleSide() {
  if (sidebar.classList.contains("sidebar-open")) {
    sidebar.classList.remove("sidebar-open");
    sidebar.style.display = "none";
    btnSide.style.display = "block";
  } else {
    sidebar.classList.add("sidebar-open");
    sidebar.style.display = "block";  
    btnSide.style.display = "none";
  }
}

