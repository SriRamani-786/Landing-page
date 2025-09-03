// Small progressive enhancements: mobile nav, FAQ chevrons, dynamic year

(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!isOpen));
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
    });
  }

  // Expand/collapse styling for mobile
  const style = document.createElement('style');
  style.innerHTML = `@media (max-width: 879px){
    .site-nav { position: absolute; right: 16px; top: 64px; background: linear-gradient(180deg, rgba(15, 22, 40, 0.98), rgba(15, 22, 40, 0.92)); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 10px; display: none; flex-direction: column; gap: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); }
    .site-nav.open { display: flex; }
    .site-nav ul { display: grid; }
  }`;
  document.head.appendChild(style);

  // FAQ chevron tweak
  document.querySelectorAll('.faq-item summary').forEach((summary) => {
    summary.addEventListener('click', () => {
      // Allow native details to handle open state
      setTimeout(() => {
        document.querySelectorAll('.faq-item').forEach((d) => {
          // no-op, but could manage single-open behavior here
        });
      }, 0);
    });
  });

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();


