export class Menu {
  constructor(selector) {
    this.menuElement = document.querySelector(selector)

    document.body.addEventListener('click', event => {
      if (event.target.offsetParent !== this.menuElement) {
        this.close()
      }
    })
  }

  open() {
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      this.menuElement.textContent = 'Тестовое название' // потом удалить
      this.menuElement.style.top = `${event.y}px`
      this.menuElement.style.left = `${event.x}px`
      this.menuElement.classList.add('open')
    })
    // throw new Error(`"open" method should be implemented in Menu"`)
  }

  close() {
    this.menuElement.classList.remove('open')
    // throw new Error(`"close" method should be implemented in Menu"`)
  }

  add() {
    this.menuElement.append(newElement)
    // throw new Error(`"add" method should be implemented in Menu"`)
  }
}