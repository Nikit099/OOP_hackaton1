import { Module } from '../core/module'
import { random } from '../utils'
import { randomColor } from '../utils'
export class FigureModule extends Module {

    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const lastFigure = document.querySelector('.figure')
        if (lastFigure) {
            lastFigure.remove()
        }
        const figure = document.createElement('div')
        let width = random(50, 400)
        let height = random(50, 300)
        figure.className = 'figure'
        figure.style.position = 'absolute'
        figure.style.width = width + 'px'
        figure.style.height = height + 'px'

        figure.style.left = `${random(1, document.body.clientWidth - width)}px`
        figure.style.top = `${random(1, document.body.clientHeight - height)}px`

        figure.style.borderRadius = `20px`
        figure.style.background = randomColor()

        document.body.prepend(figure)

    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }



}