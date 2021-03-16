const colors = ['orange', 'green', 'yellow', 'salad']

let current = colors[0]

function change(color = colors[0]) {
  document.querySelectorAll(`.${current}`).forEach(el => el.style.opacity = 0)
  document.querySelector(`.slider__btn-${current}`).style.background = '#ffffff'
  document.querySelectorAll(`.${color}`).forEach(el => el.style.opacity = 1)
  document.querySelector(`.slider__btn-${color}`).style.background = '#000'
  current = color
  let i = colors.indexOf(current)
  i === 2 ? document.body.style.color = '#000' : document.body.style.color = '#ffffff'
  document.onkeydown = (event) => {
    if (event.key === 'ArrowLeft') {
      i === 0 ? i = colors.length - 1 : i--
    }
    if (event.key === 'ArrowRight') {
      i === colors.length - 1 ? i = 0 : i++
    }
    change(`${colors[i]}`)
  }
}
change()

function buttons() {
  for (let i = 0; i < colors.length; i++) {
    document.querySelector(`.slider__btn-${colors[i]}`).addEventListener('click', () => change(`${colors[i]}`))
  }
}
buttons()