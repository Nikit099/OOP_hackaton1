export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function randomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

export function main () {
    const newArr = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
    const randomValue = Math.floor(Math.random() * newArr.length)
    const result = newArr[randomValue]
    return result
  }
