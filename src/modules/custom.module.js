import { Module } from '../core/module'
import { main } from '../utils'

export class CustomModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.customElement = document.createElement('div')
    }

    trigger() {
        this.customElement.className = 'custom-element'
        this.customElement.textContent = main()
        document.body.append(this.customElement)

        setTimeout(() => {
            this.customElement.remove()
        }, 4000)
    }
}