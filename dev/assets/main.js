import '../styles/main.css'
import '../../node_modules/feather-icons/dist/feather'
import { setupCounter } from './counter.js'

feather.replace()
setupCounter(document.querySelector('#counter'))
