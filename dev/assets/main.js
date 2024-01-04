import '../styles/main.sass';
import '@fontsource-variable/inter';
import '@phosphor-icons/web/regular';
import './darkmode';

// Responsive menu
const btn = document.querySelector('.responsive-btn');
const menu = document.querySelector('.responsive-menu');

if (btn && menu) {
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}
