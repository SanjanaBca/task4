// small enhancements shared across pages
(() => {
  // close mobile nav when clicking links
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelector('.nav')?.classList.remove('open');
      document.querySelectorAll('.nav-toggle').forEach(btn => btn.setAttribute('aria-expanded','false'));
    });
  });

  // keyboard nav for nav-toggle
  document.querySelectorAll('.nav-toggle').forEach(btn=>{
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter') btn.click();
    });
  });
})();
