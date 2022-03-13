import {Module} from '../core/module'

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text)

    this.timerContainer = document.createElement('div')
    this.timerBlock = document.createElement('span')
    this.timerHeader = document.createElement('h2')
    this.countdownTime = 0
  }

  createTimer() {
    document.body.append(this.timerContainer)
    this.timerContainer.append(this.timerHeader)
    this.timerContainer.append(this.timerBlock)
    
    this.timerHeader.textContent = 'ТАЙМЕР'
    this.timerBlock.textContent = '00:00'

    this.timerContainer.className = 'timer-container'
    this.timerHeader.className = 'timer-header'
    this.timerBlock.className = 'timer-block'
    
    let timer = setInterval(() => {
      let minutes = Math.floor(this.countdownTime / 60)
      minutes = minutes < 10 ? '0' + minutes : minutes
      let seconds = this.countdownTime % 60
      seconds = seconds < 10 ? '0' + seconds : seconds
      this.timerBlock.innerHTML = `${minutes}:${seconds}`
      this.countdownTime--

      if (this.countdownTime < -1) {
        clearInterval(timer)
        alert('Время вышло!')
        document.body.style.background = '#fff'
        this.timerContainer.remove()
      }
    }, 1000)
  }

  trigger() {
    this.countdownTime = +prompt('Введите количество секунд!')
    if (this.countdownTime) {
      document.body.style.background = '#8CA7BC'
      this.createTimer()
    }
  }
}
