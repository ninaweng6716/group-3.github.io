// menu button
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

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
  )
  
hamburger.addEventListener("click", toggleMenu);

// header disappears when user scrolls down and reappears when user scrolls up
let prevScroll = window.scrollY;

window.onscroll = function() {
  const currentScroll = window.scrollY;
  const header = document.getElementById('header');
  const sidebar = document.getElementById('sidebar');

  if (prevScroll > currentScroll) {
    header.style.top = '0';
    sidebar.style.top = '136px';
  } else if (prevScroll < currentScroll) {
    header.style.top = '-200px';
    sidebar.style.top = '0';
  };

  prevScroll = currentScroll;
};

// Lightmode function
const labelElement = document.getElementById('switch-id');

function lightMode() {
  var element = document.body;

  element.classList.toggle('light-mode');
  if (labelElement.textContent === 'Light Mode') {
    labelElement.textContent = 'Dark Mode';
  } else {
    labelElement.textContent = 'Light Mode';
  }
};

// Animation Begins when User scrolls to content
document.addEventListener('scroll', function(e) {
  var top = window.scrollY + window.innerHeight,
      isVisible = top > document.querySelector('#box-animation').offsetTop;
    
  if (isVisible) {
    document.getElementById('box-animation').classList.add('animate');
  }
});

// toggle sidebar content in mobile
const btnSide = document.getElementById('btn-sidebar');
const sidebar = document.getElementById('sidebar');
const sidebarItems = document.querySelectorAll('.sidebar-items')

function toggleSide() {
  if (sidebar.classList.contains("sidebar-open")) {
    sidebar.classList.remove("sidebar-open");
    sidebar.style.display = "none";
    btnSide.style.display = "block";
  } else {
    sidebar.classList.add("sidebar-open");
    sidebar.style.display = "block";  
  }
}
sidebarItems.forEach( 
  function(sidebarItems) { 
    sidebarItems.addEventListener("click", toggleSide);
  }
  )

btnSide.addEventListener('click', toggleSide);
