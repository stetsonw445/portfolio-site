

document.addEventListener("DOMContentLoaded", function() {
  const changeColorLink = document.querySelector('.change-color');
      const body = document.querySelector('body');

      

      

      changeColorLink.addEventListener('click', toggleBackgroundGradient);

      let isGradient1 = true;

function toggleBackgroundGradient() {
  isGradient1 = !isGradient1;
  if (isGradient1) {
    body.classList.add('background-gradient-1');
    body.classList.remove('background-gradient-2');
  } else {
    body.classList.add('background-gradient-2');
    body.classList.remove('background-gradient-1');
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
