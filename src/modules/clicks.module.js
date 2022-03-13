import {Module} from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.time = 3
    this.scoreClicks = 0
  }

  decreaseTime() {
    if (this.time === 0) {
      this.finish()
    } else {
      --this.time
    } 
  }
  
  start() {
    setInterval(() => {
      document.body.innerHTML = `<h3 class="time">осталось ${this.time} сек<h3>`
      this.decreaseTime()
    }, 1000)

    document.body.addEventListener('click', () => { 
      if (this.time !== 0) {
        this.scoreClicks++   
      }
    })
  }

  finish() {
    if (this.scoreClicks === 0) {
      document.body.innerHTML = `<h3 class="count">Счет: ${this.scoreClicks} <br>Ты в курсе, что на манипуляторе есть кнопка?</br></h3>`
    } else if (this.scoreClicks > 0 && this.scoreClicks <= 14) {
      document.body.innerHTML = `<h3 class="count">Счет: ${this.scoreClicks} <br>Неплохо</br></h3>`
    } else if (this.scoreClicks >= 15) {
      document.body.innerHTML = `<h3 class="count">Счет: ${this.scoreClicks} <br>Ты киберкотлета?!</br></h3>`
    }
  }

  trigger() {
    this.start()
  }
}
