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
    figure.className = 'figure'
    figure.style.position = 'absolute'
    figure.style.left = `${random(1, document.body.clientWidth - 400)}px`
    figure.style.top = `${random(1, document.body.clientHeight - 300)}px`
    figure.style.width = random(50, 400) + 'px'
    figure.style.height = random(50, 300) + 'px'
    figure.style.borderRadius = `20px`
    figure.style.background = randomColor()
    document.body.prepend(figure)
  }
}
