// Highlight the section currently in view.
const navLinks = [...document.querySelectorAll('.nav-menu a')];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;
  navLinks.forEach(link => link.classList.remove('active'));
  const active = document.querySelector(`.nav-menu a[href="#${visible.target.id}"]`);
  if (active) active.classList.add('active');
}, { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.2, 0.5] });

sections.forEach(section => observer.observe(section));
