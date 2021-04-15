const randomColorBtn = document.querySelector('.random-gradient')
const arrowsBtn = document.querySelectorAll('.arrows button')
let rgbColors = []

const randomNumber = () => {
  return Math.floor(Math.random() * 255)
}

const rgbColor = () => {
  let rgb = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
  rgbColors.push(rgb)

  return rgb
}

const createLinearGradient = (direction = 'to bottom', colors) => {
  return `
    linear-gradient(
      ${direction},
      ${colors ? colors[0] : rgbColor()},
      ${colors ? colors[1] : rgbColor()}
    )
  `
}

const setBackgroundGradient = () => {
  rgbColors = []
  document.body.style.backgroundImage = createLinearGradient()
}

randomColorBtn.addEventListener('click', setBackgroundGradient)

arrowsBtn.forEach(button => {
  button.addEventListener('click', e => {
    if (rgbColors.length === 2) {
      document.body.style.backgroundImage = createLinearGradient(e.target.className, rgbColors)
    }
  })
})
