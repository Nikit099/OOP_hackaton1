import { Menu } from './core/menu'

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
    if (this.el) {
      this.el.classList.remove('open')
    }
  }

  add(newEl) {
    this.el.innerHTML += newEl
  }

  clickModulOnMenu(modulBackgroundColor, modulCreateFigure, modulTimer) {
    this.el.addEventListener('click', (event) => {
      const {target} = event
      const menuItem = target.closest('.menu-item')

      if (menuItem.dataset.type === 'setBackgroundColor') {
        modulBackgroundColor.trigger()
        this.close()
      }

      if (menuItem.dataset.type === 'createFigure') {
        modulCreateFigure.trigger()
        this.close()
      }

      if (menuItem.dataset.type === 'timer') {
        modulTimer.trigger()
        this.close()
      }
    })
  }
}
