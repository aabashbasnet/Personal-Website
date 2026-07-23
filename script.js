// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Animate skill bars when they scroll into view =====
const skillBars = document.querySelectorAll('.skill-bar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

skillBars.forEach(bar => observer.observe(bar));

// ===== Contact form (front-end only) =====
// This currently just shows a confirmation message.
// To actually receive messages, connect this to a form backend
// like Formspree, EmailJS, or your own server, and replace the
// code inside the submit handler below.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();

  status.textContent = `Thanks ${name || 'there'} — your message is ready. Connect this form to an email service to actually send it.`;
  form.reset();
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();