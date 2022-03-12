import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
  }

  open() {
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      this.el.style.top = `${event.y}px`
      this.el.style.left = `${event.x}px`
      this.el.classList.add('open')
    })
  }

  close() {
    this.el.classList.remove('open')
  }

  add() {
    this.el.append(newElement)
  }
}
