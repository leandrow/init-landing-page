// Dark mode
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');
const toggleMode = document.querySelector('.toggle-mode');

// Set mode: dark or light
// If left empty, the mode will be set based on the OS preferences
localStorage.theme = 'dark';

function toggleTheme() {
  const isDark =
    localStorage.theme === 'dark' ||
    (localStorage.theme === '' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
  } else {
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
  }

  document.documentElement.classList.toggle('dark', isDark);
  localStorage.theme = isDark ? 'light' : 'dark';
}

toggleMode.addEventListener('click', toggleTheme);
toggleTheme();
