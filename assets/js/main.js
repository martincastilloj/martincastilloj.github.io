// Nav scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile burger menu
  const burger  = document.getElementById('navBurger');
  const overlay = document.getElementById('navOverlay');

  function openNav() {
    burger.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Cerrar menú');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    overlay.removeAttribute('inert');
    document.body.classList.add('nav-open');
    const firstLink = overlay.querySelector('a');
    if (firstLink) firstLink.focus();
  }
  function closeNav() {
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menú');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('inert', '');
    document.body.classList.remove('nav-open');
    burger.focus();
  }

  burger.addEventListener('click', () => {
    burger.classList.contains('active') ? closeNav() : openNav();
  });

  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && burger.classList.contains('active')) closeNav();
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
