import { Module } from '../core/module'

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        document.body.style.background = color
    }


    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }



}