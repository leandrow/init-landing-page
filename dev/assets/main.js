import '../styles/main.css';
import feather from 'feather-icons';
import { setupCounter } from './counter.js';
import './darkmode';
import '@phosphor-icons/web/regular';
import '@fontsource-variable/inter';

feather.replace();
setupCounter(document.querySelector('#counter'));
