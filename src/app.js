import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { FigureModule } from './modules/figure.module'

const modulBackgroundColor = new BackgroundModule('setBackgroundColor', 'Изменить фон страници')
const modulCreateFigure = new FigureModule('createFigure', 'Создать фигуру')
const menu = new ContextMenu('.menu')
menu.open()
menu.add(modulBackgroundColor.toHTML())
menu.add(modulCreateFigure.toHTML())
menu.clickModulOnMenu(modulBackgroundColor, modulCreateFigure)
