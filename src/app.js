import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { FigureModule } from './modules/figure.module'
import { TimerModule } from './modules/timer.module'

const modulBackgroundColor = new BackgroundModule('setBackgroundColor', 'Изменить фон страницы')
const modulCreateFigure = new FigureModule('createFigure', 'Создать фигуру')
const modulTimer = new TimerModule('timer', 'Запустить таймер')
const menu = new ContextMenu('.menu')
menu.open()
menu.add(modulBackgroundColor.toHTML())
menu.add(modulCreateFigure.toHTML())
menu.add(modulTimer.toHTML())
menu.clickModulOnMenu(modulBackgroundColor, modulCreateFigure, modulTimer)
