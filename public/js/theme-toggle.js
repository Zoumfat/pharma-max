(function () {
  const root = document.documentElement;
  const toggleButtons = document.querySelectorAll('[data-theme-mode]');
  const storageKey = 'pharma-max-theme';

  const applyTheme = (mode) => {
    const nextMode = mode === 'dark' ? 'dark' : 'light';
    root.setAttribute('data-bs-theme', nextMode);
    document.body.dataset.theme = nextMode;
    toggleButtons.forEach((btn) => {
      if (btn.dataset.themeMode === nextMode) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  };

  const storedTheme = localStorage.getItem(storageKey);
  if (storedTheme) {
    applyTheme(storedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.themeMode;
      localStorage.setItem(storageKey, mode);
      applyTheme(mode);
    });
  });
})();
