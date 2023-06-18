// Dark mode
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');
const toggleMode = document.querySelector('.toggle-mode');

function toggleTheme() {
  const isDark =
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (!isDark) {
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
  } else {
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
  }

  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('color-theme', isDark ? 'light' : 'dark');
}

toggleMode.addEventListener('click', toggleTheme);
