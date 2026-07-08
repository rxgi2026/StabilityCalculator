const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const navAnchors = document.querySelectorAll('.nav-links a');
const yearElement = document.querySelector('[data-year]');
const toast = document.querySelector('[data-toast]');
const copyEmailButton = document.querySelector('[data-copy-email]');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function closeNavigation() {
  if (!navToggle || !navLinks) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
  document.body.classList.remove('nav-open');
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('is-open', !isExpanded);
    document.body.classList.toggle('nav-open', !isExpanded);
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });
}

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

const sections = [...document.querySelectorAll('main section[id]')];

if ('IntersectionObserver' in window && sections.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeId = entry.target.id;
      navAnchors.forEach((anchor) => {
        const href = anchor.getAttribute('href');
        anchor.classList.toggle('is-active', href === `#${activeId}`);
      });
    });
  }, {
    rootMargin: '-35% 0px -55% 0px',
    threshold: 0.01
  });

  sections.forEach((section) => observer.observe(section));
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    const email = copyEmailButton.getAttribute('data-copy-email');
    if (!email) return;

    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API unavailable');
      }
      await navigator.clipboard.writeText(email);
      showToast('Email copied: ' + email);
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  });
}
