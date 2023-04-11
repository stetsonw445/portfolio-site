const changeColorLink = document.querySelector('.change-color');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.btn');

let isGradient1 = true;

document.addEventListener("DOMContentLoaded", function() {
  const changeColorLink = document.querySelector('.change-color');
      const body = document.querySelector('body');

      

      

      changeColorLink.addEventListener('click', toggleBackgroundGradient);


function toggleBackgroundGradient() {
  isGradient1 = !isGradient1;
  if (isGradient1) {
    body.classList.add('background-gradient-1');
    body.classList.remove('background-gradient-2');
    buttons.forEach((button) => {
      button.classList.remove('background-gradient-2');
      button.classList.add('background-gradient-1');
    });
  } else {
    body.classList.add('background-gradient-2');
    body.classList.remove('background-gradient-1');
    buttons.forEach((button) => {
      button.classList.remove('background-gradient-1');
      button.classList.add('background-gradient-2');
    });
  }
}

// Get the image element
const img = document.querySelector('.fade-in');

// Function to check if the element is in view
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to show the image when it's in view
function showImage() {
  if (isInViewport(img)) {
    img.classList.add('visible');
    window.removeEventListener('scroll', showImage);
  }
}

// Add an event listener to show the image when the page is scrolled
window.addEventListener('scroll', showImage);


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


const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {
    name,
    email,
    message,
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/f/moqpyvwn');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Your message has been sent!');
      form.reset();
    } else {
      alert('There was a problem sending your message. Please try again.');
    }
  };

  xhr.send(JSON.stringify(data));
});
