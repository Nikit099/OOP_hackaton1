import { Module } from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.time = 3
        this.scoreClicks = 0
        this.interval = null
        this.block = document.createElement('div')
    }


    start() {
        document.body.prepend(this.block)
        this.interval = setInterval(() => {

            this.block.innerHTML = `<h3 class="time">осталось ${this.time} сек<h3>`
            if (this.time === 0) {
                clearInterval(this.interval)
                this.finish()
            } else {
                --this.time
            }
        }, 1000)

        document.body.addEventListener('click', () => {
            if (this.time !== 0) {
                this.scoreClicks++
            }
        })
    }

    finish() {
        if (this.scoreClicks === 0) {
            this.block.innerHTML = `<h3 class="count">Счет: ${this.scoreClicks} <br>Ты в курсе, что на манипуляторе есть кнопка?</br></h3>`
        } else if (this.scoreClicks > 0 && this.scoreClicks <= 14) {
            this.block.innerHTML = `<h3 class="count">Счет: ${this.scoreClicks} <br>Неплохо</br></h3>`
        } else if (this.scoreClicks >= 15) {
            this.block.innerHTML = `<h3 class="count">Счет: ${this.scoreClicks} <br>Ты киберкотлета?!</br></h3>`
        }
        setTimeout(() => {
            this.block.remove()

        }, 2000)

    }

    trigger() {
        this.start()
    }
}