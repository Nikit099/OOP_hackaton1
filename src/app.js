import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { FigureModule } from './modules/figure.module'
import { TimerModule } from './modules/timer.module'
import { ClicksModule } from './modules/clicks.module'
import { CustomModule } from './modules/custom.module'

const modulBackgroundColor = new BackgroundModule('background', 'Изменить фон страницы')
const modulCreateFigure = new FigureModule('figure', 'Создать фигуру')
const modulTimer = new TimerModule('timer', 'Запустить таймер')
const modulClicks = new ClicksModule('clicks', 'Посчитать клики')
const modulCustom = new CustomModule('custom', 'Случайное сообщение')
const menu = new ContextMenu('.menu')

menu.open()

const moduls = [modulBackgroundColor, modulCreateFigure, modulTimer, modulClicks, modulCustom]
moduls.forEach(i => {
    menu.add(i.toHTML())
})

menu.clickModulOnMenu(moduls)