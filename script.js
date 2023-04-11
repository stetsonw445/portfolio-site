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
    
contactButton.addEventListener('click', toggleTable);
      
function toggleTable() {
  if(!isShowing) {
    contactInfoTable.style.display = 'table';
    contactButton.innerText = 'Hide Contact Info';
    isShowing = true;
  }
  else {
    contactInfoTable.style.display = 'none';
    contactButton.innerText = 'Show Contact Info';
    isShowing = false;
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




let header = document.getElementById('header');
		let timeoutId = null;

		header.addEventListener('mousemove', function(event) {
			header.classList.add('animate');
			clearTimeout(timeoutId);

			timeoutId = setTimeout(function() {
				header.classList.remove('animate');
			}, 2000);
		});


    
    
