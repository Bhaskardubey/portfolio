// Smooth scroll on nav link click
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Theme toggle (dark/light)
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Reveal animation
const sections = document.querySelectorAll('.section');
const reveal = () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
// Tab functionality for About section
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active classes
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // Add active to clicked tab
    btn.classList.add('active');
    const tabId = btn.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('.skills-tab-btn');
  const tabContents = document.querySelectorAll('.skills-tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      button.classList.add('active');

      // Hide all content
      tabContents.forEach(content => content.classList.remove('active'));
      // Show content that matches the clicked button
      const skillType = button.getAttribute('data-skill');
      document.getElementById(skillType).classList.add('active');
    });
  });
});


