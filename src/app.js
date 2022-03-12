import './styles.css'
import { Menu } from './core/menu' // добавил я

const menu = new Menu('.menu') // добавил я

document.body.addEventListener('click', e => menu.open(e))