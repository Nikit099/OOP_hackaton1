import { Module } from '../core/module'

export class CustomModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.customElement = document.createElement('div')
  }

  trigger() {
    this.customElement.className = 'custom-element'
    this.customElement.textContent = 'Custom Message!'
    document.body.append(this.customElement)

    setTimeout(() => {
      document.querySelector('.custom-element').remove()
    }, 4000)
  }
}
