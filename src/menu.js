import { Menu } from './core/menu'
export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)

    }

    open() {
        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.menuElement.style.top = `${event.y}px`
            this.menuElement.style.left = `${event.x}px`
            this.menuElement.classList.add('open')
        })
    }
    close() {
        if (this.menuElement) {
            this.menuElement.classList.remove('open')
        }
    }
    add(newElement) {
        this.menuElement.innerHTML += newElement
    }
    clickModulOnMenu(modulBackgroundColor, modulCreateFigure) {

        this.menuElement.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item')
            if (menuItem.dataset.type === 'setBackgroundColor') {

                modulBackgroundColor.trigger()
                this.close()


            } else if (menuItem.dataset.type === 'createFigure') {

                modulCreateFigure.trigger()
                this.close()

            }
        })
    }

}