import {h, Component} from 'composi'
import {title} from './components/title'
import {Calculator} from './components/calculator'

title.state = 'Composi Calculator'

// Instantiate calculator:
const calculator = new Calculator()
calculator.update()
