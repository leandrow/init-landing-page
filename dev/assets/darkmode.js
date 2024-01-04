// Dark mode
const toggleModeBts = document.querySelectorAll('.toggle-mode');
const icons = {
  dark: document.querySelectorAll('.dark-icon'),
  light: document.querySelectorAll('.light-icon'),
};

// Set mode: dark or light
// If left blank, the mode will be based on OS preferences
localStorage.theme = '';

function toggleTheme() {
  const isDark =
    localStorage.theme === 'dark' ||
    (localStorage.theme === '' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  Object.entries(icons).forEach(([mode, iconList]) => {
    iconList.forEach((icon) => {
      const shouldShow =
        (mode === 'dark' && isDark) || (mode === 'light' && !isDark);
      icon.classList.toggle('hidden', !shouldShow);
    });
  });

  document.documentElement.classList.toggle('dark', isDark);
  localStorage.theme = isDark ? 'light' : 'dark';
}

toggleModeBts.forEach((button) => {
  button.addEventListener('click', toggleTheme);
});

toggleTheme();
