import '../styles/main.css';
import { setupCounter } from './counter.js';
import './darkmode';
import '@phosphor-icons/web/regular';
import '@fontsource-variable/inter';

setupCounter(document.querySelector('#counter'));
