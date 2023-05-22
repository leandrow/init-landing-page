import '../styles/main.css'
import feather from 'feather-icons'
import { setupCounter } from './counter.js'

feather.replace()
setupCounter(document.querySelector('#counter'))
