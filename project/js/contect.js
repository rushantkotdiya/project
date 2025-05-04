const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for contacting Manganresto! We will get back to you soon.');
  form.reset();
});