const changeColorLink = document.querySelector('.change-color');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.btn');
const otherButton = document.querySelector('button');

let isGradient1 = true;
let isShowing = false;

document.addEventListener("DOMContentLoaded", function() {
const changeColorLink = document.querySelector('.change-color');
const body = document.querySelector('body');
changeColorLink.addEventListener('click', toggleBackgroundGradient);
const contactButton = document.getElementById('contact-button');
const contactInfoTable = document.getElementById('contact-info-table');
const navBar = document.getElementById('nav'); // Replace '.navbar' with the selector for your nav bar element
const hideMenuBtn = document.getElementById("hideMenu");
const showMenuBtn = document.getElementById("showMenu");
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", () => {
  // Show the button when the user scrolls down 20px from the top
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollToTopBtn.style.display = "block";
    //navBar.style.display = 'none';
  } else {
    scrollToTopBtn.style.display = "none";
    
  }
  
  //navBar.addEventListener('mouseover', toggleNavBarVisibility);
});

scrollToTopBtn.addEventListener("click", () => {
  // Smoothly scroll the page to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

contactButton.addEventListener('click', toggleTable);
hideMenuBtn.addEventListener('click', toggleNavBarVisibility);  
showMenuBtn.addEventListener('click', toggleNavBarVisibility);
showMenuBtn.style.display = 'none';
function toggleTable() {
  if(!isShowing) {
    contactInfoTable.style.display = 'table';
    contactButton.innerText = 'Hide Contact Info';
    contactInfoTable.classList.add('spinning');
    contactButton.classList.add('spinning');
    const contactHeader = document.getElementById('contactHeader');
    const contactSection = document.getElementById('contact');
    contactSection.classList.add('spinning');
    contactHeader.classList.add('spinning');
    isShowing = true;
  }
  else {
    contactButton.innerText = 'Show Contact Info';
    contactInfoTable.style.display = 'none';
    contactInfoTable.classList.remove('spinning');
    const contactHeader = document.getElementById('contactHeader');
    const contactSection = document.getElementById('contact');
    contactHeader.classList.remove('spinning');
    contactButton.classList.remove('spinning');
    contactSection.classList.remove('spinning');
    isShowing = false;
  }
}

function toggleNavBarVisibility() {
  
  if(navBar.style.display === 'none') {
    navBar.style.display = 'block';
    showMenuBtn.style.display = 'none';
  }
  else {
    navBar.style.display = 'none';
    showMenuBtn.style.display = 'block';
  }

}

function toggleBackgroundGradient() {
  isGradient1 = !isGradient1;
  if (isGradient1) {
    body.classList.add('background-gradient-1');
    body.classList.remove('background-gradient-2');
    otherButton.classList.add('background-gradient-1');
    otherButton.classList.remove('background-gradient-2');
    buttons.forEach((button) => {
      button.classList.remove('background-gradient-2');
      button.classList.add('background-gradient-1');
    });
  } else {
    body.classList.add('background-gradient-2');
    body.classList.remove('background-gradient-1');
    otherButton.classList.add('background-gradient-1');
    otherButton.classList.remove('background-gradient-2');
    buttons.forEach((button) => {
      button.classList.remove('background-gradient-1');
      button.classList.add('background-gradient-2');
    });
  }
}



});




window.addEventListener('load', () => {
  const portfolioHeading = document.getElementById('header');
  portfolioHeading.classList.add('spinning');
});


    
    
