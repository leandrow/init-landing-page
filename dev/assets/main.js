import '../styles/main.css';
import feather from 'feather-icons';
import { setupCounter } from './counter.js';
import './darkmode';

feather.replace();
setupCounter(document.querySelector('#counter'));
